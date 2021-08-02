import { useRouter } from 'next/router'
import { FC } from 'react'
import { links } from './links'

const Header: FC<{ className?: string }> = ({ className = '' }) => {
  const router = useRouter()

  return (
    <header className={`py-8 ${className}`}>
      <nav>
        <ul className="flex">
          {links.map(({ href, text }, index) => (
            <li className={`p-2 ${index === 0 ? 'pl-0' : ''}`} key={href}>
              <a className={router.asPath === href ? 'font-bold' : ''} href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
