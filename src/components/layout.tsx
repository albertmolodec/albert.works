import { FC } from 'react'
import Head from 'next/head'

import Header from './header'

const Layout: FC = ({ children }) => {
  return (
    <div className="h-full min-h-screen flex flex-col p-4 text-black">
      <Head>
        <meta charSet="UTF-8" />
        <title>Home - Albert Abdulmanov</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <Header className="max-w-screen-md mx-auto w-full" />
      <main className="max-w-screen-md mx-auto w-full flex flex-col flex-1 py-4">{children}</main>
    </div>
  )
}

export default Layout
