import { cleanupOldArchives } from "../lib/pricelist.mjs";

export const config = {
  schedule: "15 3 * * *",
};

export default async function handler() {
  try {
    const result = await cleanupOldArchives();
    console.log(
      JSON.stringify({
        message: "Dimaris price list cleanup completed.",
        deleted: result.deleted,
      })
    );

    return Response.json(result, { status: 200 });
  } catch (error) {
    console.error(
      JSON.stringify({
        message: "Dimaris price list cleanup failed.",
        error: error instanceof Error ? error.message : String(error),
      })
    );

    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown cleanup error.",
      },
      { status: 500 }
    );
  }
}
