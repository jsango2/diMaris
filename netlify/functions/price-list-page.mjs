import { listPriceLists } from "../lib/pricelist.mjs";

// Javna stranica s cjenicima (Odluka o objavi cjenika, NN 101/26).
// Slaže se na poslužitelju kao običan HTML s poveznicama na CSV datoteke,
// tako da je i robotima koji ne pokreću JavaScript sve vidljivo i dohvatljivo.
export const config = {
  method: ["GET", "HEAD"],
  path: "/objava-cjenika",
};

const escapeHtml = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);

// "2026-11-12T06:33:17" ili "2026-11-12T06:33:17+01:00" -> "12. 11. 2026. u 06:33"
function formatDateTime(iso) {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(iso || "");
  if (!match) {
    return "";
  }
  const [, y, m, d, hh, mm] = match;
  return `${Number(d)}. ${Number(m)}. ${y}. u ${hh}:${mm}`;
}

function renderStore(store) {
  const { code, name, address, latest, archive } = store;
  const latestHtml = latest
    ? `<p>Aktualni cjenik: <a href="${escapeHtml(latest.publicUrl)}" download>${escapeHtml(latest.filename)}</a>
        <br><small>Izvoz: ${escapeHtml(formatDateTime(latest.exportedAt))}${
          latest.publishedAt ? ` · objava: ${escapeHtml(formatDateTime(latest.publishedAt))}` : ""
        }</small></p>`
    : `<p>Cjenik još nije objavljen.</p>`;

  const archiveHtml = archive.length
    ? `<details>
        <summary>Arhiva cjenika, zadnjih 30 dana (${archive.length})</summary>
        <ul>
          ${archive
            .map(
              (entry) =>
                `<li><a href="${escapeHtml(entry.url)}" download>${escapeHtml(entry.filename)}</a> <small>(${escapeHtml(
                  formatDateTime(entry.publishedAt || entry.exportedAt)
                )})</small></li>`
            )
            .join("\n          ")}
        </ul>
      </details>`
    : "";

  return `<section id="${escapeHtml(code)}">
      <h2>${escapeHtml(name)}</h2>
      <p class="meta">${escapeHtml(address)} · oznaka prodajnog objekta: ${escapeHtml(code)}</p>
      ${latestHtml}
      ${archiveHtml}
    </section>`;
}

export function renderPage(stores, generatedAt = new Date()) {
  return `<!doctype html>
<html lang="hr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Objava cjenika | DI Maris</title>
  <meta name="description" content="Dnevni cjenici DI Maris ribarnica u CSV formatu, po prodajnom objektu, s arhivom zadnjih 30 dana.">
  <link rel="canonical" href="https://dimaris.hr/objava-cjenika">
  <link rel="alternate" type="application/json" href="/api/cjenici" title="Popis cjenika (JSON)">
  <style>
    :root { color-scheme: light; }
    body { margin: 0; background: #fff; color: #1c2640; font: 16px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
    main { max-width: 860px; margin: 0 auto; padding: 32px 16px 64px; }
    h1 { margin: 0 0 8px; font-size: 28px; }
    h2 { margin: 0 0 4px; font-size: 20px; }
    a { color: #4299c8; word-break: break-all; }
    section { border-top: 1px solid #dfe3ea; padding: 20px 0; }
    .meta, small { color: #5b6478; }
    ul { padding-left: 20px; }
    li { margin: 4px 0; }
    summary { cursor: pointer; }
    footer { margin-top: 24px; color: #5b6478; font-size: 14px; }
  </style>
</head>
<body>
  <main>
    <p><a href="/">← dimaris.hr</a></p>
    <h1>Objava cjenika</h1>
    <p>Cjenici se objavljuju svaki dan za svaki prodajni objekt u CSV formatu, u skladu s Odlukom o objavi cjenika proizvoda i usluga (NN 101/26). Prethodni cjenici dostupni su u arhivi 30 dana.</p>
    <p>Popis svih cjenika za strojnu obradu: <a href="/api/cjenici">/api/cjenici</a> (JSON).</p>
    ${stores.map(renderStore).join("\n    ")}
    <footer>Stranica generirana: ${escapeHtml(generatedAt.toISOString())}</footer>
  </main>
</body>
</html>`;
}

export default async function handler() {
  try {
    const stores = await listPriceLists();
    return new Response(renderPage(stores), {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=0, must-revalidate",
        "Netlify-CDN-Cache-Control": "public, max-age=300, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error(JSON.stringify({ message: "Dimaris price list page failed.", error: String(error?.message || error) }));
    return new Response("<!doctype html><meta charset=utf-8><title>Objava cjenika</title><p>Popis cjenika trenutno nije dostupan. Pokušajte ponovno za nekoliko minuta.</p>", {
      status: 503,
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
    });
  }
}
