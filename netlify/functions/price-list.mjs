import { readArchiveCsv, readCurrentCsv, readPublicCsv } from "../lib/pricelist.mjs";

const CSV_HEADERS = {
  "Content-Type": "text/csv; charset=utf-8",
  "Cache-Control": "no-store, max-age=0",
  "X-Content-Type-Options": "nosniff",
};

export const config = {
  method: ["GET", "HEAD"],
  path: "/cjenici/*",
};

export default async function handler(request) {
  const url = new URL(request.url);
  const path = decodeURIComponent(url.pathname).replace(/^\/+|\/+$/g, "");
  const relativePath = getRelativePriceListPath(path);

  let csv = null;
  if (relativePath === "aktualni.csv") {
    csv = await readCurrentCsv();
  } else if (relativePath.startsWith("arhiva/")) {
    const filename = relativePath.slice("arhiva/".length);
    csv = await readArchiveCsv(filename);
  } else if (/^[a-zA-Z0-9][a-zA-Z0-9._+-]*\.csv$/.test(relativePath)) {
    csv = await readPublicCsv(relativePath);
  }

  if (!csv) {
    return new Response("Not found\n", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  }

  return new Response(request.method === "HEAD" ? null : csv, {
    status: 200,
    headers: CSV_HEADERS,
  });
}

function getRelativePriceListPath(path) {
  if (path.startsWith("cjenici/")) {
    return path.slice("cjenici/".length);
  }

  if (path.startsWith(".netlify/functions/price-list/")) {
    return path.slice(".netlify/functions/price-list/".length);
  }

  return path;
}
