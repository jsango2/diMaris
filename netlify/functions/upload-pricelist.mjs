import { saveUploadedPriceList, validateUploadToken } from "../lib/pricelist.mjs";

export const config = {
  method: "POST",
  path: "/cjenici/upload",
};

export default async function handler(request) {
  const filename = request.headers.get("x-filename") || "";

  const tokenValidation = validateUploadToken(request, process.env);
  if (!tokenValidation.ok) {
    logUpload({ ok: false, status: tokenValidation.status, filename, reason: tokenValidation.error });
    return jsonResponse({ ok: false, error: tokenValidation.error }, tokenValidation.status);
  }

  if (!filename) {
    logUpload({ ok: false, status: 400, filename, reason: "Missing X-Filename header." });
    return jsonResponse({ ok: false, error: "Missing X-Filename header." }, 400);
  }

  let bytes = 0;
  let rows = 0;
  try {
    const csv = await request.text();
    bytes = Buffer.byteLength(csv, "utf8");
    rows = csv.split(/\r\n|\r|\n/).filter((line) => line.trim()).length;
    const result = await saveUploadedPriceList({
      filename,
      csv,
      env: process.env,
    });

    logUpload({ ok: true, status: 200, filename, bytes, rows, archiveFilename: result.archiveFilename });
    return jsonResponse(result, 200);
  } catch (error) {
    const reason = error instanceof Error ? error.message : "Unknown upload error.";
    logUpload({ ok: false, status: 400, filename, bytes, rows, reason });
    return jsonResponse({ ok: false, error: reason }, 400);
  }
}

// Jedan redak u Netlify logu funkcije po pokušaju uploada (bez tokena i bez sadržaja CSV-a).
function logUpload({ ok, status, filename, bytes, rows, reason, archiveFilename }) {
  const name = String(filename || "").slice(0, 300);
  const entry = {
    event: "pricelist-upload",
    ok,
    status,
    filename: name || null,
    store: name.match(/_(T\d{3})_/)?.[1] || null,
    bytes,
    rows,
    reason: reason ? String(reason).slice(0, 500) : undefined,
    archiveFilename,
  };
  (ok ? console.log : console.warn)(JSON.stringify(entry));
}

function jsonResponse(body, status) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
