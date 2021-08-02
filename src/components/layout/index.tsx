import { FC } from 'react'
import Head from 'next/head'

import Header from '../header'

const Layout: FC<{ className?: string }> = ({ children, className = '' }) => {
  const layoutClass = 'mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32 text-gray-900' + className

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Home - Albert Abdulmanov</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Frontend Developer from St. Petersburg 🇷🇺" />
        <link rel="icon" href="./assets/favicon.png" type="image/png" />
      </Head>
      <Header />
      <main className={layoutClass}>{children}</main>
    </>
  )
}

export default Layout
