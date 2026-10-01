import { createHash } from "node:crypto";
import { getStore } from "@netlify/blobs";

export const CSV_HEADER = [
  "naziv",
  "sifra",
  "marka",
  "jedinica_mjere",
  "cijena_za_jedinicu_mjere",
  "maloprodajna_cijena",
  "posebni_oblik_prodaje",
  "naziv_posebnog_oblika_prodaje",
  "sidrena_cijena",
  "barkod",
  "dostupnost",
];

const STORE_NAME = "dimaris-price-lists";
const CURRENT_KEY = "current.csv";
const STATE_KEY = "state.json";
const PUBLIC_PREFIX = "public/";
const ARCHIVE_PREFIX = "archive/";
const RETENTION_DAYS = 30;
const DEFAULT_ALLOWED_FILENAME_PATTERNS = [
  /^PRODAVAONICA_Miroslava_Krleze_1c_23000_Zadar_T004_000006_\d{8}_\d{6}\.csv$/,
  /^PRODAVAONICA_Pod_bedemom_1a_23000_Zadar_T001_000006_\d{8}_\d{6}\.csv$/,
  /^PRODAVAONICA_Pod_bedemom_1a_23000_Zadar_T005_000006_\d{8}_\d{6}\.csv$/,
  /^PRODAVAONICA_Polacisce_2_23000_Zadar_T002_000006_\d{8}_\d{6}\.csv$/,
  /^PRODAVAONICA_Put_Murvice_20_23000_Zadar_T009_000006_\d{8}_\d{6}\.csv$/,
  /^PRODAVAONICA_Setaliste_kneza_Branimira_6_23210_Biograd_na_moru_T006_000006_\d{8}_\d{6}\.csv$/,
];

const DEFAULT_FIELD_MAP = {
  naziv: ["naziv", "Naziv", "nazivArtikla", "NazivArtikla", "artiklNaziv", "ArtiklNaziv", "Name"],
  sifra: ["sifra", "Sifra", "sifraArtikla", "SifraArtikla", "artiklId", "ArtiklId", "id", "Id"],
  marka: ["Brand", "brand", "marka", "Marka", "proizvodjac", "Proizvodjac"],
  jedinica_mjere: ["jedinica_mjere", "jedinicaMjere", "JedinicaMjere", "jm", "JM", "mjernaJedinica", "MjernaJedinica"],
  cijena_za_jedinicu_mjere: [
    "cijena_za_jedinicu_mjere",
    "cijenaZaJedinicuMjere",
    "CijenaZaJedinicuMjere",
    "jedinicnaCijena",
    "JedinicnaCijena",
  ],
  maloprodajna_cijena: [
    "maloprodajna_cijena",
    "maloprodajnaCijena",
    "MaloprodajnaCijena",
    "mpc",
    "MPC",
    "cijena",
    "Cijena",
  ],
  posebni_oblik_prodaje: [
    "posebni_oblik_prodaje",
    "posebniOblikProdaje",
    "PosebniOblikProdaje",
    "akcija",
    "Akcija",
    "naAkciji",
    "NaAkciji",
  ],
  naziv_posebnog_oblika_prodaje: [
    "naziv_posebnog_oblika_prodaje",
    "nazivPosebnogOblikaProdaje",
    "NazivPosebnogOblikaProdaje",
    "nazivAkcije",
    "NazivAkcije",
    "akcijaNaziv",
    "AkcijaNaziv",
  ],
  sidrena_cijena: [
    "sidrena_cijena",
    "sidrenaCijena",
    "SidrenaCijena",
    "najNizaCijena",
    "NajNizaCijena",
    "najnizaCijena",
    "NajnizaCijena",
  ],
  barkod: ["barkod", "Barkod", "barcode", "Barcode", "ean", "EAN"],
  dostupnost: ["dostupnost", "Dostupnost", "raspolozivo", "Raspolozivo", "dostupno", "Dostupno", "stanje", "Stanje"],
};

const REQUIRED_ENV = [
  "VENIO_API_BASE_URL",
  "VENIO_API_USERNAME",
  "VENIO_API_PASSWORD",
  "DIMARIS_STORE_TYPE",
  "DIMARIS_STORE_ADDRESS",
  "DIMARIS_STORE_CODE",
  "DIMARIS_STORAGE_NUMBER",
];

const REQUIRED_COLUMNS = [
  "naziv",
  "sifra",
  "maloprodajna_cijena",
  "posebni_oblik_prodaje",
  "sidrena_cijena",
  "dostupnost",
];

export function getMissingEnvironment(env = process.env) {
  return REQUIRED_ENV.filter((name) => !String(env[name] || "").trim());
}

export function getZagrebDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Zagreb",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const value = (type) => parts.find((part) => part.type === type)?.value;
  return {
    year: value("year"),
    month: value("month"),
    day: value("day"),
    hour: value("hour"),
    minute: value("minute"),
    second: value("second"),
  };
}

export function getZagrebDate(date = new Date()) {
  const parts = getZagrebDateParts(date);
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function getZagrebTimestamp(date = new Date()) {
  const parts = getZagrebDateParts(date);
  const zonedUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  );
  const offsetMinutes = Math.round((zonedUtc - date.getTime()) / 60000);
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const absolute = Math.abs(offsetMinutes);
  const offsetHours = String(Math.floor(absolute / 60)).padStart(2, "0");
  const offsetRemainder = String(absolute % 60).padStart(2, "0");

  return `${parts.year}${parts.month}${parts.day}T${parts.hour}${parts.minute}${parts.second}${sign}${offsetHours}${offsetRemainder}`;
}

export function buildVenioUrl(env = process.env, date = getZagrebDate()) {
  const baseUrl = String(env.VENIO_API_BASE_URL || "").trim();
  const allowInsecureHttp = env.ALLOW_INSECURE_VENIO_HTTP === "true";

  if (!baseUrl) {
    throw new Error("VENIO_API_BASE_URL is not configured.");
  }

  const url = new URL(baseUrl);
  if (url.protocol !== "https:" && !allowInsecureHttp) {
    throw new Error("VENIO_API_BASE_URL must use HTTPS.");
  }

  const basePath = url.pathname.replace(/\/+$/, "");
  url.pathname = `${basePath}/MaloprodajaCjenik/CjenikWebNovo/Skladiste/T003/${date}`.replace(/\/{2,}/g, "/");
  url.searchParams.set("grupaArtiklId", "21");
  url.searchParams.set("grupaNaziv", "Brand");

  return url;
}

export async function fetchVenioItems(env = process.env, date = getZagrebDate()) {
  const url = buildVenioUrl(env, date);
  const auth = Buffer.from(`${env.VENIO_API_USERNAME}:${env.VENIO_API_PASSWORD}`, "utf8").toString("base64");
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${auth}`,
    },
  });

  if (!response.ok) {
    throw new Error(`VENIO API returned HTTP ${response.status}.`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType && !contentType.toLowerCase().includes("json")) {
    throw new Error(`VENIO API returned unsupported content type: ${contentType}.`);
  }

  return extractItems(await response.json(), env.VENIO_ITEMS_PATH);
}

export function extractItems(payload, configuredPath) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!payload || typeof payload !== "object") {
    throw new Error("VENIO API response is not a JSON object or array.");
  }

  if (configuredPath) {
    const selected = configuredPath.split(".").reduce((value, key) => value?.[key], payload);
    if (!Array.isArray(selected)) {
      throw new Error(`VENIO_ITEMS_PATH "${configuredPath}" does not point to an array.`);
    }
    return selected;
  }

  const candidates = ["artikli", "Artikli", "items", "Items", "data", "Data", "result", "Result", "results", "Results"];
  for (const key of candidates) {
    if (Array.isArray(payload[key])) {
      return payload[key];
    }
  }

  throw new Error("Could not find the article array in the VENIO API response.");
}

export function loadFieldMap(env = process.env) {
  if (!env.VENIO_FIELD_MAP_JSON) {
    return DEFAULT_FIELD_MAP;
  }

  const parsed = JSON.parse(env.VENIO_FIELD_MAP_JSON);
  return {
    ...DEFAULT_FIELD_MAP,
    ...Object.fromEntries(
      Object.entries(parsed).map(([column, fields]) => [column, Array.isArray(fields) ? fields : [fields]])
    ),
  };
}

export function createCsvFromItems(items, env = process.env) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("VENIO API returned no articles.");
  }

  const fieldMap = loadFieldMap(env);
  const rows = items.map((item, index) => mapItemToRow(item, index, fieldMap));
  rows.sort((left, right) => {
    const byCode = left.sifra.localeCompare(right.sifra, "hr");
    return byCode || left.naziv.localeCompare(right.naziv, "hr");
  });

  const lines = [CSV_HEADER.join(","), ...rows.map((row) => CSV_HEADER.map((column) => csvCell(row[column])).join(","))];
  return `${lines.join("\n")}\n`;
}

function mapItemToRow(item, index, fieldMap) {
  if (!item || typeof item !== "object") {
    throw new Error(`Article ${index + 1} is not a JSON object.`);
  }

  const row = {};
  for (const column of CSV_HEADER) {
    row[column] = normalizeColumnValue(column, pickField(item, fieldMap[column] || []));
  }

  for (const column of REQUIRED_COLUMNS) {
    if (!row[column]) {
      throw new Error(`Article ${index + 1} is missing required CSV column "${column}".`);
    }
  }

  if (row.posebni_oblik_prodaje === "DA" && !row.naziv_posebnog_oblika_prodaje) {
    throw new Error(`Article ${index + 1} is missing the special sale name.`);
  }

  if (row.posebni_oblik_prodaje === "NE") {
    row.naziv_posebnog_oblika_prodaje = "";
  }

  return row;
}

function pickField(item, candidates) {
  for (const field of candidates) {
    if (!field) {
      continue;
    }

    const value = String(field)
      .split(".")
      .reduce((current, key) => current?.[key], item);

    if (value !== undefined && value !== null && String(value).trim() !== "") {
      return value;
    }
  }

  return "";
}

function normalizeColumnValue(column, value) {
  if (value === undefined || value === null) {
    return "";
  }

  if (column === "maloprodajna_cijena" || column === "cijena_za_jedinicu_mjere" || column === "sidrena_cijena") {
    return normalizeDecimal(value);
  }

  if (column === "posebni_oblik_prodaje") {
    return normalizeYesNo(value);
  }

  if (column === "dostupnost") {
    return normalizeAvailability(value);
  }

  return String(value).trim();
}

function normalizeDecimal(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value.toFixed(2);
  }

  const text = String(value).trim().replace(/\s/g, "").replace(",", ".");
  if (!text) {
    return "";
  }

  const number = Number(text);
  if (!Number.isFinite(number)) {
    throw new Error(`Invalid decimal value "${value}".`);
  }

  return number.toFixed(2);
}

function normalizeYesNo(value) {
  if (typeof value === "boolean") {
    return value ? "DA" : "NE";
  }

  const text = String(value).trim().toLowerCase();
  if (["da", "yes", "true", "1", "d", "y"].includes(text)) {
    return "DA";
  }
  if (["ne", "no", "false", "0", "n"].includes(text)) {
    return "NE";
  }

  throw new Error(`Invalid special sale value "${value}".`);
}

function normalizeAvailability(value) {
  if (typeof value === "boolean") {
    return value ? "DOSTUPNO" : "NEDOSTUPNO";
  }

  if (typeof value === "number") {
    return value > 0 ? "DOSTUPNO" : "NEDOSTUPNO";
  }

  const text = String(value).trim().toLowerCase();
  if (["dostupno", "da", "yes", "true", "1", "available", "raspolozivo", "raspoloživo"].includes(text)) {
    return "DOSTUPNO";
  }
  if (["nedostupno", "ne", "no", "false", "0", "unavailable", "nije dostupno"].includes(text)) {
    return "NEDOSTUPNO";
  }

  throw new Error(`Invalid availability value "${value}".`);
}

function csvCell(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

export function hashCsv(csv) {
  return createHash("sha256").update(csv).digest("hex");
}

export function getAllowedUploadFilenames(env = process.env) {
  return String(env.DIMARIS_ALLOWED_PRICELIST_FILENAMES || "")
    .split(",")
    .map((filename) => filename.trim())
    .filter(Boolean);
}

export function getAllowedUploadFilenamePatterns(env = process.env) {
  const configuredPatterns = String(env.DIMARIS_ALLOWED_PRICELIST_FILENAME_PATTERNS || "")
    .split(",")
    .map((pattern) => pattern.trim())
    .filter(Boolean)
    .map((pattern) => new RegExp(pattern));

  return configuredPatterns.length > 0 ? configuredPatterns : DEFAULT_ALLOWED_FILENAME_PATTERNS;
}

export function validateUploadToken(request, env = process.env) {
  const expectedToken = String(env.DIMARIS_PRICELIST_UPLOAD_TOKEN || "");
  if (!expectedToken) {
    return { ok: false, status: 500, error: "Upload token is not configured." };
  }

  const authorization = request.headers.get("authorization") || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  if (!match || match[1] !== expectedToken) {
    return { ok: false, status: 401, error: "Unauthorized." };
  }

  return { ok: true };
}

export function validatePublicCsvFilename(filename, env = process.env) {
  const cleanFilename = String(filename || "").trim();
  if (!/^[a-zA-Z0-9][a-zA-Z0-9._+-]*\.csv$/.test(cleanFilename)) {
    throw new Error("Invalid CSV filename.");
  }

  const allowedFilenames = getAllowedUploadFilenames(env);
  const allowedPatterns = getAllowedUploadFilenamePatterns(env);
  const isAllowed =
    allowedFilenames.includes("*") ||
    allowedFilenames.includes(cleanFilename) ||
    allowedPatterns.some((pattern) => pattern.test(cleanFilename));

  if (!isAllowed) {
    throw new Error(`Filename "${cleanFilename}" is not allowed.`);
  }

  return cleanFilename;
}

export function validateUploadedCsv(csv) {
  const normalizedCsv = String(csv || "").replace(/^\uFEFF/, "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const lines = normalizedCsv.split("\n").filter((line, index, allLines) => line || index < allLines.length - 1);
  if (lines.length < 2) {
    throw new Error("CSV must contain a header and at least one data row.");
  }

  const header = parseCsvLine(lines[0]);
  if (header.join(",") !== CSV_HEADER.join(",")) {
    throw new Error(`Invalid CSV header. Expected: ${CSV_HEADER.join(",")}`);
  }

  for (let index = 1; index < lines.length; index += 1) {
    if (!lines[index].trim()) {
      continue;
    }

    const columns = parseCsvLine(lines[index]);
    if (columns.length !== CSV_HEADER.length) {
      throw new Error(`CSV row ${index + 1} has ${columns.length} columns, expected ${CSV_HEADER.length}.`);
    }
  }

  return `${normalizedCsv.replace(/\n*$/, "")}\n`;
}

function parseCsvLine(line) {
  const columns = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && quoted && nextChar === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (char === "," && !quoted) {
      columns.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  if (quoted) {
    throw new Error("CSV contains an unterminated quoted value.");
  }

  columns.push(current);
  return columns;
}

export function buildArchiveFilename(env = process.env, date = new Date()) {
  const parts = [
    env.DIMARIS_STORE_TYPE,
    env.DIMARIS_STORE_ADDRESS,
    env.DIMARIS_STORE_CODE,
    env.DIMARIS_STORAGE_NUMBER,
    getZagrebTimestamp(date),
  ];

  return `${parts.map(slugPart).join("_")}.csv`;
}

function slugPart(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9+-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getPriceListStore() {
  return getStore(STORE_NAME);
}

export async function readCurrentCsv() {
  return getPriceListStore().get(CURRENT_KEY, { type: "text", consistency: "strong" });
}

export async function readPublicCsv(filename) {
  if (!/^[a-zA-Z0-9][a-zA-Z0-9._+-]*\.csv$/.test(filename)) {
    return null;
  }

  return getPriceListStore().get(`${PUBLIC_PREFIX}${filename}`, { type: "text", consistency: "strong" });
}

export async function readArchiveCsv(filename) {
  if (!/^[a-z0-9][a-z0-9._+-]*\.csv$/i.test(filename)) {
    return null;
  }

  return getPriceListStore().get(`${ARCHIVE_PREFIX}${filename}`, { type: "text", consistency: "strong" });
}

export async function syncPriceList(env = process.env, now = new Date()) {
  const missingEnvironment = getMissingEnvironment(env);
  if (missingEnvironment.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvironment.join(", ")}.`);
  }

  const date = getZagrebDate(now);
  const items = await fetchVenioItems(env, date);
  const csv = createCsvFromItems(items, env);
  const hash = hashCsv(csv);
  const store = getPriceListStore();
  const previousState = (await store.get(STATE_KEY, { type: "json", consistency: "strong" })) || {};
  const firstPublicationToday = previousState.date !== date;
  const contentChanged = previousState.hash !== hash;

  if (!firstPublicationToday && !contentChanged) {
    return {
      archived: false,
      changed: false,
      date,
      hash,
      itemCount: items.length,
      currentArchive: previousState.archiveFilename || null,
    };
  }

  const archiveFilename = buildArchiveFilename(env, now);
  const archiveKey = `${ARCHIVE_PREFIX}${archiveFilename}`;
  const metadata = {
    date,
    hash,
    publishedAt: now.toISOString(),
  };

  await store.set(archiveKey, csv, { metadata });
  await store.set(CURRENT_KEY, csv, { metadata: { ...metadata, archiveFilename } });
  await store.setJSON(STATE_KEY, {
    date,
    hash,
    archiveFilename,
    itemCount: items.length,
    publishedAt: now.toISOString(),
  });

  return {
    archived: true,
    changed: contentChanged,
    date,
    hash,
    itemCount: items.length,
    currentArchive: archiveFilename,
  };
}

export async function saveUploadedPriceList({ filename, csv, env = process.env, now = new Date() }) {
  const publicFilename = validatePublicCsvFilename(filename, env);
  const normalizedCsv = validateUploadedCsv(csv);
  const hash = hashCsv(normalizedCsv);
  const store = getPriceListStore();
  const timestamp = getZagrebTimestamp(now);
  const archiveFilename = publicFilename.replace(/\.csv$/i, `_${timestamp}.csv`);
  const metadata = {
    filename: publicFilename,
    hash,
    publishedAt: now.toISOString(),
  };

  await store.set(`${ARCHIVE_PREFIX}${archiveFilename}`, normalizedCsv, { metadata });
  await store.set(`${PUBLIC_PREFIX}${publicFilename}`, normalizedCsv, {
    metadata: { ...metadata, archiveFilename },
  });

  return {
    ok: true,
    filename: publicFilename,
    archiveFilename,
    hash,
    publicPath: `/cjenici/${publicFilename}`,
    archivePath: `/cjenici/arhiva/${archiveFilename}`,
  };
}

export async function cleanupOldArchives(now = new Date()) {
  const store = getPriceListStore();
  const cutoff = now.getTime() - RETENTION_DAYS * 24 * 60 * 60 * 1000;
  let deleted = 0;

  for await (const result of store.list({ prefix: ARCHIVE_PREFIX, paginate: true })) {
    for (const blob of result.blobs) {
      const metadata = await store.getMetadata(blob.key, { consistency: "strong" });
      const publishedAt = metadata?.metadata?.publishedAt;
      if (!publishedAt) {
        continue;
      }

      const publishedAtMs = Date.parse(String(publishedAt));
      if (Number.isFinite(publishedAtMs) && publishedAtMs < cutoff) {
        await store.delete(blob.key);
        deleted += 1;
      }
    }
  }

  return { deleted };
}
