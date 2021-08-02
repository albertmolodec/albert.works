import { FC } from "react";
import { links } from "./links";

const Header: FC = () => {
  return (
    <header className="hidden">
      {links.map(({ href, text }) => (
        <a key={href} href={href}>
          {text}
        </a>
      ))}
    </header>
  );
};

export default Header;
