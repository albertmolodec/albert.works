/* eslint-disable react/no-unescaped-entities */

import { Fragment } from 'react'
import useSWR from 'swr'
import * as Progress from '@radix-ui/react-progress'

import { dislikeList, supportList } from '../../lib/preferences'

// if (Done) {
//   spanElement.style.textDecoration = 'line-through'
// }

// if (URL) {
//   const aElement = document.createElement('a')
//   aElement.href = URL
//   aElement.target = '_blank'
//   aElement.classList.add('text-blue-500')
//   aElement.classList.add('hover:underline')
//   wrap(spanElement, aElement)
// }

// if (Own) {
//   spanElement.innerHTML += ` <span class="text-gray-500">(куплю себе сам)</span>`
// }

const Wishlist = () => {
  const { data, error } = useSWR('/api/wishlist')

  console.log({ data, error })

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

      {error && <p>Failed to load data.</p>}
      {!data && (
        <div className="py-8">
          <Progress.Root className="mx-auto relative overflow-hidden bg-coolGray-300 rounded-full w-60 h-6" value={66}>
            <Progress.Indicator
              className="h-full bg-coolGray-900 transition-width duration-300"
              style={{ width: `${20}%` }}
            />
          </Progress.Root>
        </div>
      )}
      {data && <ol className="list-decimal pl-5 mt-4"></ol>}

      <p className="mt-3">
        There is another option. If you don't know what to give, you can make a donation to the one of the russian
        independent media, human rights, charitable or environmental organization:{' '}
        {supportList.map(({ href, text }, index) => (
          <Fragment key={href}>
            {index !== 0 && ', '}
            <a target="_blank" rel="noreferrer" href={href} className="text-blue-700 hover:underline-link">
              «{text}»
            </a>
          </Fragment>
        ))}{' '}
        or any other. I will be glad of such a donation no less than any other another gift.
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
