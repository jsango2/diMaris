import { listPriceLists } from "../lib/pricelist.mjs";

export const config = {
  method: ["GET"],
  path: "/api/cjenici",
};

export default async function handler() {
  try {
    const stores = await listPriceLists();
    return Response.json(
      { ok: true, generatedAt: new Date().toISOString(), stores },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, max-age=0, must-revalidate",
          "Netlify-CDN-Cache-Control": "public, max-age=300, stale-while-revalidate=60",
        },
      }
    );
  } catch (error) {
    console.error(JSON.stringify({ message: "Dimaris price list index failed.", error: String(error?.message || error) }));
    return Response.json({ ok: false, error: "Price list index unavailable." }, { status: 500 });
  }
}
