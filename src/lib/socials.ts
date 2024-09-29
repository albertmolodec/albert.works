import { SvgEmail } from "../components/icons/email";
import { SvgTwitter } from "../components/icons/twitter";
import { SvgMastodon } from "../components/icons/mastodon";
import { SvgInstagram } from "../components/icons/instagram";
import { SvgTelegram } from "../components/icons/telegram";
import { SvgGithub } from "../components/icons/github";
import { SvgLinkedin } from "../components/icons/linkedin";

interface Social {
  text: string;
  Icon: typeof SvgEmail;
  url: string;
}

export const socials: Social[] = [
  {
    text: "Email",
    Icon: SvgEmail,
    url: "mailto:hello@kitcat.dev",
  },
  {
    text: "Twitter",
    Icon: SvgTwitter,
    url: "https://twitter.com/kitcat_en",
  },
  {
    text: "Mastodon",
    Icon: SvgMastodon,
    url: "https://mstdn.party/@kitcat",
  },
  {
    text: "Instagram",
    Icon: SvgInstagram,
    url: "https://instagram.com/albertmolodec",
  },
  {
    text: "Telegram",
    Icon: SvgTelegram,
    url: "http://t.me/albertmolodec",
  },
  {
    text: "Github",
    Icon: SvgGithub,
    url: "https://github.com/kitcat-dev",
  },
  {
    text: "LinkedIn",
    Icon: SvgLinkedin,
    url: "https://www.linkedin.com/in/albert-abdulmanov",
  },
];
