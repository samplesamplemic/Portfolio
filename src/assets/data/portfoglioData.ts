import { NavbarObject, PortfolioObject } from "../../model/workObject";
import { HomeIcon } from "@heroicons/react/24/solid";
import { InboxIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import iconLinkedin from "../../assets/icons/icon-linkedin.png";
import iconLinkedinHover from "../../assets/icons/icon-linkedin-hover.png";
import iconGithub from "../../assets/icons/icno-github.png";
import iconGithubHover from "../../assets/icons/icon-github-hover.png";

const navbarData: NavbarObject[] = [
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
  //   {
  //     icon: iconLinkedin,
  //     link: "/",
  //     title: "LinkedIn",
  //   },
  //   {
  //     icon: iconLinkedinHover,
  //     link: "/",
  //     title: "LinkedIn",
  //   },
  //   {
  //     icon: iconGithub,
  //     link: "/",
  //     title: "Github",
  //   },
  //   {
  //     icon: iconGithubHover,
  //     link: "/",
  //     title: "Github",
  //   },
];

export const PortfolioData: PortfolioObject = {
  navbarItems: navbarData,
};
