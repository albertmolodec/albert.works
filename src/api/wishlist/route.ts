import Airtable from 'airtable'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const WISHLIST_BASE_ID = 'apppJBdNlpiff8yfq'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(WISHLIST_BASE_ID)

export async function GET(_: Request) {
  const records = await new Promise((resolve, reject) => {
    const myWishes = []
    base('Gift Ideas')
      .select({
        maxRecords: 100,
        view: 'Main View',
        filterByFormula: '{Potential Recipients} = "Я"',
        fields: ['Item', 'URL', 'Pic', 'Done', 'Own'],
        sort: [
          {
            field: 'Done',
            direction: 'asc',
          },
          {
            field: 'Own',
            direction: 'asc',
          },
          {
            field: 'URL',
            direction: 'desc',
          },
        ],
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach((record) => {
            myWishes.push(record.fields)
          })
          fetchNextPage()
        },
        (err) => {
          if (err) {
            console.error(err)
            reject(err)
          } else {
            resolve(myWishes)
          }
        }
      )
  })
  const body = JSON.stringify({ records })

  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}
