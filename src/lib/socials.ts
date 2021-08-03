import { SvgEmail } from "../components/icons/email";
import { SvgTwitter } from "../components/icons/twitter";
import { SvgInstagram } from "../components/icons/instagram";
import { SvgTelegram } from "../components/icons/telegram";
import { SvgGithub } from "../components/icons/github";
import { SvgFacebook } from "../components/icons/facebook";
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
    url: "mailto:hello@lbrt.me",
  },
  {
    text: "Twitter",
    icon: SvgTwitter,
    url: "https://twitter.com/albertmolodec",
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
    url: "https://github.com/albertmolodec",
  },
  {
    text: "Facebook",
    icon: SvgFacebook,
    url: "https://www.facebook.com/profile.php?id=100001486167096",
  },
  {
    text: "LinkedIn",
    icon: SvgLinkedin,
    url: "https://www.linkedin.com/in/albert-abdulmanov",
  },
];
