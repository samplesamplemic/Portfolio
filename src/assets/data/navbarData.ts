import { NavbarObject, PortfolioObject } from "../../model/dataInterfaces";
import { HomeIcon } from "@heroicons/react/24/solid";
import { InboxIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import iconLinkedin from "../../assets/icons/icon-linkedin.png";
import iconLinkedinHover from "../../assets/icons/icon-linkedin-hover.png";
import iconGithub from "../../assets/icons/icno-github.png";
import iconGithubHover from "../../assets/icons/icon-github-hover.png";

export const navbarData: NavbarObject[] = [
  {
    icon: HomeIcon,
    link: "/",
    title: "Home",
  },
  {
    icon: UserCircleIcon,
    link: "/aboutMe",
    title: "About me",
  },
  {
    icon: InboxIcon,
    link: "/projects",
    title: "Projects",
  },
  {
    icon: EnvelopeIcon,
    link: "/",
    title: "Contact me",
  },
];
export const navbarSocialData: NavbarObject[][] = [
  [
    {
      icon: iconLinkedinHover,
      link: "/",
      title: "LinkedIn",
    },
    {
      icon: iconLinkedin,
      link: "/",
      title: "LinkedIn",
    },
  ],
  [
    {
      icon: iconGithubHover,
      link: "/",
      title: "Github",
    },
    {
      icon: iconGithub,
      link: "/",
      title: "Github",
    },
  ],
];
