import Image from 'next/image'

import avatar from './me.webp'
import { socials } from './socials'

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Albert Abdulmanov's home page.</h1>
      <div className="flex flex-col sm:flex-row">
        <Image alt="My low poly photo" src={avatar} layout="fixed" width={256} height={256} />

        <div className="leading-tight mt-8 sm:mt-0 sm:ml-8 flex flex-col justify-center">
          <p className="text-2xl md:text-3xl">Hello, I am</p>
          <h1 className="font-semibold text-4xl md:text-5xl">Albert Abdulmanov.</h1>
        </div>
      </div>
      <p className="mt-6 text-lg">This is my little corner on the World Wide Web.</p>
      <p className="mt-2 text-lg">You can also find me at:</p>
      <div className="mt-2 flex space-x-4">
        {socials.map((social) => (
          <a
            key={social.url}
            className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            href={social.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="sr-only">{social.text}</div>
            <social.icon className="h-6 w-6 inline" />
          </a>
        ))}
      </div>
    </>
  )
}
