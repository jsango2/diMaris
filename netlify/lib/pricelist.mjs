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
  /^PRODAVAONICA_Miroslava_Krleze_1c_23000_Zadar_T004_\d+_\d{8}_\d{6}\.csv$/,
  /^PRODAVAONICA_Pod_bedemom_1a_23000_Zadar_T001_\d+_\d{8}_\d{6}\.csv$/,
  /^PRODAVAONICA_Pod_bedemom_1a_23000_Zadar_T005_\d+_\d{8}_\d{6}\.csv$/,
  /^PRODAVAONICA_Polacisce_2_23000_Zadar_T002_\d+_\d{8}_\d{6}\.csv$/,
  /^PRODAVAONICA_Put_Murvice_20_23000_Zadar_T009_\d+_\d{8}_\d{6}\.csv$/,
  /^PRODAVAONICA_Setaliste_kneza_Branimira_6_23210_Biograd_na_moru_T006_\d+_\d{8}_\d{6}\.csv$/,
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

// Poslovnice čiji se cjenici prikazuju na stranici (oznaka iz naziva CSV datoteke).
export const STORES = [
  { code: "T002", name: "DI Maris City Galleria", address: "Polačišće 2, Zadar" },
  { code: "T004", name: "DI Maris Maraska park", address: "Miroslava Krleže 1c, Zadar" },
  { code: "T001", name: "DI Maris Pod bedemom (T001)", address: "Pod bedemom 1a, Zadar" },
  { code: "T005", name: "DI Maris Pod bedemom (T005)", address: "Pod bedemom 1a, Zadar" },
  { code: "T009", name: "DI Maris Vatrogasni", address: "Put Murvice 20, Zadar" },
  { code: "T006", name: "DI Maris Biograd tržnica", address: "Šetalište kneza Branimira 6, Biograd na moru" },
];

const PRICELIST_FILENAME_RE = /^PRODAVAONICA_.+_(T\d{3})_(\d+)_(\d{8})_(\d{6})\.csv$/;

function compactToIso(date, time) {
  // "20261024", "063233" -> "2026-10-24T06:32:33" (lokalno vrijeme Zagreb)
  return `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}T${time.slice(0, 2)}:${time.slice(2, 4)}:${time.slice(4, 6)}`;
}

function zagrebStampToIso(stamp) {
  // "20261019T130714+0200" -> "2026-10-19T13:07:14+02:00"
  const match = /^(\d{8})T(\d{6})([+-])(\d{2})(\d{2})$/.exec(stamp);
  if (!match) {
    return null;
  }
  return `${compactToIso(match[1], match[2])}${match[3]}${match[4]}:${match[5]}`;
}

export function parsePriceListFilename(filename) {
  const match = PRICELIST_FILENAME_RE.exec(filename);
  if (!match) {
    return null;
  }
  return {
    storeCode: match[1],
    sequence: Number(match[2]),
    exportedAt: compactToIso(match[3], match[4]),
  };
}

// archive/<javni_naziv bez .csv>_<YYYYMMDDTHHMMSS+HHMM>.csv
// Netlify Blobs u ključu sprema "+" kao razmak ("..._20261112T063317 0100.csv"),
// pa prihvaćamo oba oblika. Čitanje preko /cjenici/arhiva/ radi s "+" (%2B).
export function parseArchiveFilename(archiveFilename) {
  const match = /^(.+)_(\d{8}T\d{6})([+\- ])(\d{4})\.csv$/.exec(archiveFilename);
  if (!match) {
    return null;
  }
  const [, base, stamp, rawSign, offset] = match;
  const zagrebStamp = `${stamp}${rawSign === "-" ? "-" : "+"}${offset}`;
  const publicFilename = `${base}.csv`;
  const parsed = parsePriceListFilename(publicFilename);
  if (!parsed) {
    return null;
  }
  return {
    ...parsed,
    publicFilename,
    urlFilename: `${base}_${zagrebStamp}.csv`,
    publishedAt: zagrebStampToIso(zagrebStamp),
  };
}

async function listKeys(store, prefix) {
  const keys = [];
  for await (const result of store.list({ prefix, paginate: true })) {
    for (const blob of result.blobs) {
      keys.push(blob.key.slice(prefix.length));
    }
  }
  return keys;
}

// Gradi popis po poslovnici: zadnji cjenik + arhiva (najnoviji prvi, najviše RETENTION_DAYS dana).
export function buildPriceListIndex({ publicFilenames, archiveFilenames, now = new Date() }) {
  const cutoff = now.getTime() - RETENTION_DAYS * 24 * 60 * 60 * 1000;
  const byStore = new Map(STORES.map((store) => [store.code, new Map()]));

  for (const archiveFilename of archiveFilenames) {
    const parsed = parseArchiveFilename(archiveFilename);
    if (!parsed || !byStore.has(parsed.storeCode)) {
      continue;
    }
    const entries = byStore.get(parsed.storeCode);
    const existing = entries.get(parsed.publicFilename);
    // Ako je ista datoteka poslana više puta, vrijedi zadnje slanje.
    if (!existing || String(parsed.publishedAt) > String(existing.publishedAt)) {
      entries.set(parsed.publicFilename, {
        filename: parsed.publicFilename,
        sequence: parsed.sequence,
        exportedAt: parsed.exportedAt,
        publishedAt: parsed.publishedAt,
        url: `/cjenici/arhiva/${encodeURIComponent(parsed.urlFilename)}`,
        publicUrl: `/cjenici/${encodeURIComponent(parsed.publicFilename)}`,
      });
    }
  }

  // Javne datoteke koje (više) nemaju zapis u arhivi.
  for (const publicFilename of publicFilenames) {
    const parsed = parsePriceListFilename(publicFilename);
    if (!parsed || !byStore.has(parsed.storeCode)) {
      continue;
    }
    const entries = byStore.get(parsed.storeCode);
    if (!entries.has(publicFilename)) {
      entries.set(publicFilename, {
        filename: publicFilename,
        sequence: parsed.sequence,
        exportedAt: parsed.exportedAt,
        publishedAt: null,
        url: `/cjenici/${encodeURIComponent(publicFilename)}`,
        publicUrl: `/cjenici/${encodeURIComponent(publicFilename)}`,
      });
    }
  }

  return STORES.map((store) => {
    const all = [...byStore.get(store.code).values()].sort(
      (a, b) => b.exportedAt.localeCompare(a.exportedAt) || b.sequence - a.sequence
    );
    const archive = all.filter((entry) => Date.parse(`${entry.exportedAt}Z`) >= cutoff - 24 * 60 * 60 * 1000);
    return {
      ...store,
      latest: all[0] || null,
      archive,
    };
  });
}

export async function listPriceLists(now = new Date()) {
  const store = getPriceListStore();
  const [publicFilenames, archiveFilenames] = await Promise.all([
    listKeys(store, PUBLIC_PREFIX),
    listKeys(store, ARCHIVE_PREFIX),
  ]);
  return buildPriceListIndex({ publicFilenames, archiveFilenames, now });
}
