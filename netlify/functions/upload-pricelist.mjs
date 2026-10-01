import { saveUploadedPriceList, validateUploadToken } from "../lib/pricelist.mjs";

export const config = {
  method: "POST",
  path: "/cjenici/upload",
};

export default async function handler(request) {
  const tokenValidation = validateUploadToken(request, process.env);
  if (!tokenValidation.ok) {
    return jsonResponse({ ok: false, error: tokenValidation.error }, tokenValidation.status);
  }

  const filename = request.headers.get("x-filename") || "";
  if (!filename) {
    return jsonResponse({ ok: false, error: "Missing X-Filename header." }, 400);
  }

  try {
    const csv = await request.text();
    const result = await saveUploadedPriceList({
      filename,
      csv,
      env: process.env,
    });

    return jsonResponse(result, 200);
  } catch (error) {
    return jsonResponse(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown upload error.",
      },
      400
    );
  }
}

function jsonResponse(body, status) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
