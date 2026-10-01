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

export function getZagrebTimestamp(date = new Date()) {
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
  const year = value("year");
  const month = value("month");
  const day = value("day");
  const hour = value("hour");
  const minute = value("minute");
  const second = value("second");
  const zonedUtc = Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));
  const offsetMinutes = Math.round((zonedUtc - date.getTime()) / 60000);
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const absolute = Math.abs(offsetMinutes);
  const offsetHours = String(Math.floor(absolute / 60)).padStart(2, "0");
  const offsetRemainder = String(absolute % 60).padStart(2, "0");

  return `${year}${month}${day}T${hour}${minute}${second}${sign}${offsetHours}${offsetRemainder}`;
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

function getPriceListStore() {
  return getStore(STORE_NAME);
}

export async function readPublicCsv(filename) {
  if (!/^[a-zA-Z0-9][a-zA-Z0-9._+-]*\.csv$/.test(filename)) {
    return null;
  }

  return getPriceListStore().get(`${PUBLIC_PREFIX}${filename}`, { type: "text", consistency: "strong" });
}

export async function readArchiveCsv(filename) {
  if (!/^[a-zA-Z0-9][a-zA-Z0-9._+-]*\.csv$/.test(filename)) {
    return null;
  }

  return getPriceListStore().get(`${ARCHIVE_PREFIX}${filename}`, { type: "text", consistency: "strong" });
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
