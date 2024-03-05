/* eslint-disable react/no-unescaped-entities */

import { Fragment } from 'react'
import ContentLoader from 'react-content-loader'
import useSWR from 'swr'

import { MyMath } from '../../lib/math'
import { dislikeList } from '../../lib/preferences'

const EXPECTED_WISHLIST_LENGTH = 19

const renderLines = (n: number) => {
  return Array.from(Array(n).keys()).map((_, index) => (
    <Fragment key={index}>
      <circle cx="10" cy={20 + 30 * index} r="8" />
      <rect x="25" y={15 + 30 * index} rx="5" ry="5" width={380 * MyMath.randomFloatInRange(0.6, 1)} height="10" />
    </Fragment>
  ))
}

const Wishlist = () => {
  const { data } = useSWR('/api/wishlist')

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row w-full justify-between">
        <h1 className="font-bold text-2xl">Wishlist</h1>

        <div
          className="bg-teal-100 border-r-4 border-teal-500 rounded-l text-teal-900 px-4 py-3 shadow-md w-auto inline-block mb-4 sm:mb-0"
          role="alert"
        >
          My birthday is August 12.
        </div>
      </div>

      {!data && (
        <ContentLoader
          speed={2}
          width={400}
          height={24 * EXPECTED_WISHLIST_LENGTH}
          viewBox={`0 0 400 ${24 * EXPECTED_WISHLIST_LENGTH}`}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          uniqueKey="wishlist-loader"
        >
          {renderLines(EXPECTED_WISHLIST_LENGTH)}
        </ContentLoader>
      )}
      {data && (
        <ol className="list-decimal pl-5 mt-4">
          {data.records.map(({ Item: name, Own, Done, URL }) => (
            <li key={name}>
              {URL && !Done && !Own ? (
                <a href={URL} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline-link">
                  {name}
                </a>
              ) : (
                <span className="text-gray-500">
                  <span className={`${Done || Own ? 'line-through' : 'text-black'}`}>{name}</span>
                  {Done && ' ✅'}
                  {Own && ' (later)'}
                </span>
              )}
            </li>
          ))}
        </ol>
      )}

      <p className="mt-3">
        There is another option. If you don't know what to give, you can donate to one of the independent media, human
        rights, charitable or environmental organizations. I will be glad of such a donation no less than any other
        gift.
      </p>

      <h2 className="font-bold text-xl mt-4">Better not</h2>

      <ul className="list-decimal pl-5 mt-3">
        {dislikeList.map((item) => (
          <li key={item} className="mt-1">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Wishlist
