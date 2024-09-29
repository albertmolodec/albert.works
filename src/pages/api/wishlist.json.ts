import { getSecret } from "astro:env/server";

const WISHLIST_BASE_ID = "apppJBdNlpiff8yfq";

export async function GET(_: Request) {
  const airtableApiKey = getSecret("AIRTABLE_API_KEY");

  const response = await fetch(
    `https://api.airtable.com/v0/${WISHLIST_BASE_ID}/GiftIdeas` +
      "?maxRecords=100" +
      "&view=Main%20View" +
      "&filterByFormula=%7BPotential+Recipients%7D+%3D+%22%D0%AF%22" +
      "&fields%5B%5D=Item" +
      "&fields%5B%5D=URL" +
      "&fields%5B%5D=Pic" +
      "&fields%5B%5D=Done" +
      "&fields%5B%5D=Own" +
      "&sort%5B0%5D%5Bfield%5D=Done" +
      "&sort%5B0%5D%5Bdirection%5D=asc" +
      "&sort%5B1%5D%5Bfield%5D=Own" +
      "&sort%5B1%5D%5Bdirection%5D=asc" +
      "&sort%5B2%5D%5Bfield%5D=URL" +
      "&sort%5B2%5D%5Bdirection%5D=desc",
    {
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,
      },
    }
  );

  const body = JSON.stringify(await response.json());

  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
