import { cleanupOldArchives, syncPriceList } from "../lib/pricelist.mjs";

export const config = {
  schedule: "*/15 * * * *",
};

export default async function handler() {
  try {
    const result = await syncPriceList(process.env);
    await cleanupOldArchives();

    console.log(
      JSON.stringify({
        message: "Dimaris price list sync completed.",
        archived: result.archived,
        changed: result.changed,
        date: result.date,
        hash: result.hash,
        itemCount: result.itemCount,
        currentArchive: result.currentArchive,
      })
    );

    return Response.json(result, { status: 200 });
  } catch (error) {
    console.error(
      JSON.stringify({
        message: "Dimaris price list sync failed. Keeping the previous valid CSV active.",
        error: error instanceof Error ? error.message : String(error),
      })
    );

    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown sync error.",
      },
      { status: 500 }
    );
  }
}
