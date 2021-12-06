import { SvgEmail } from "../components/icons/email";
import { SvgTwitter } from "../components/icons/twitter";
import { SvgInstagram } from "../components/icons/instagram";
import { SvgTelegram } from "../components/icons/telegram";
import { SvgGithub } from "../components/icons/github";
import { SvgLinkedin } from "../components/icons/linkedin";

interface Social {
  text: string;
  icon: typeof SvgEmail;
  url: string;
}

export const socials: Social[] = [
  {
    text: "Email",
    icon: SvgEmail,
    url: "mailto:hello@kitcat.one",
  },
  {
    text: "Twitter",
    icon: SvgTwitter,
    url: "https://twitter.com/kitcat_ru",
  },
  {
    text: "Instagram",
    icon: SvgInstagram,
    url: "https://instagram.com/albertmolodec",
  },
  {
    text: "Telegram",
    icon: SvgTelegram,
    url: "http://t.me/albertmolodec",
  },
  {
    text: "Github",
    icon: SvgGithub,
    url: "https://github.com/kitcatdotone",
  },
  {
    text: "LinkedIn",
    icon: SvgLinkedin,
    url: "https://www.linkedin.com/in/albert-abdulmanov",
  },
];
