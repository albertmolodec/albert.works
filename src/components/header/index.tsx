import { useRouter } from 'next/router'
import { FC } from 'react'
import { links } from './links'

const Header: FC<{ className?: string }> = ({ className = '' }) => {
  const router = useRouter()
  
  const externalLinkProps = { target: "_blank", rel: "noreferrer" }
  const isLinkExternal = (href: string) => href.startsWith('http')

  return (
    <header className={`py-8 ${className}`}>
      <nav>
        <ul className="flex">
          {links.map(({ href, text }, index) => (
            <li className={`pl-4 ${index === 0 ? 'pl-0' : ''}`} key={href}>
              <a className={`hover:underline-link ${router.asPath === href ? 'font-bold' : ''}`} href={href} {isLinkExternal(href) && ...externalLinkProps}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
