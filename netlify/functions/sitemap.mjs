import { listPriceLists } from "../lib/pricelist.mjs";

// Sitemap za robote. Slaže se pri svakom dohvatu, pa uvijek sadrži
// stranicu s cjenicima i aktualni CSV svake poslovnice s datumom zadnje objave.
export const config = {
  method: ["GET", "HEAD"],
  path: "/sitemap.xml",
};

const SITE = "https://dimaris.hr";

// Stranice Next aplikacije (hr je zadani jezik, en ima prefiks /en).
const PAGES = ["/", "/politika-privatnosti", "/politika-kolacica", "/uvjeti-koristenja"];

const escapeXml = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[ch]);

const absolute = (path) => (path.startsWith("http") ? path : `${SITE}${path}`);

function pageEntries() {
  return PAGES.flatMap((path) => {
    const hr = absolute(path);
    const en = absolute(path === "/" ? "/en" : `/en${path}`);
    const alternates = `
    <xhtml:link rel="alternate" hreflang="hr" href="${escapeXml(hr)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(en)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(hr)}"/>`;
    return [hr, en].map((loc) => `  <url>\n    <loc>${escapeXml(loc)}</loc>${alternates}\n  </url>`);
  });
}

function priceListEntries(stores) {
  const latest = stores.map((store) => store.latest).filter(Boolean);
  const stamps = latest.map((entry) => entry.publishedAt || entry.exportedAt).filter(Boolean).sort();
  const newest = stamps[stamps.length - 1];

  const entries = [
    `  <url>\n    <loc>${SITE}/objava-cjenika</loc>${newest ? `\n    <lastmod>${escapeXml(newest)}</lastmod>` : ""}\n    <changefreq>daily</changefreq>\n  </url>`,
  ];

  for (const entry of latest) {
    const lastmod = entry.publishedAt || entry.exportedAt;
    entries.push(
      `  <url>\n    <loc>${escapeXml(absolute(entry.publicUrl))}</loc>${lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : ""}\n    <changefreq>daily</changefreq>\n  </url>`
    );
  }
  return entries;
}

export function renderSitemap(stores) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...pageEntries(), ...priceListEntries(stores)].join("\n")}
</urlset>
`;
}

export default async function handler() {
  let stores = [];
  try {
    stores = await listPriceLists();
  } catch (error) {
    // Ako pohrana cjenika ne radi, sitemap i dalje vraća stranice (bez CSV-ova).
    console.error(JSON.stringify({ message: "Dimaris sitemap: price lists unavailable.", error: String(error?.message || error) }));
  }
  return new Response(renderSitemap(stores), {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Netlify-CDN-Cache-Control": "public, max-age=300, stale-while-revalidate=60",
    },
  });
}
