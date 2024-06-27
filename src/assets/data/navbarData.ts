import { NavbarItems, NavbarObject } from "../../model/navbar";
import { HomeIcon } from "@heroicons/react/24/solid";
import { InboxIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import iconLinkedin from "../../assets/icons/icon-linkedin.png";
import iconLinkedinHover from "../../assets/icons/icon-linkedin-hover.png";
import iconGithub from "../../assets/icons/icon-github.png";
import iconGithubHover from "../../assets/icons/icon-github-hover.png";

export const navbarData: NavbarItems = {
  navbarItems: [
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
  ],
};
export const navbarSocialData: NavbarObject[][] = [
  [
    {
      icon: iconLinkedinHover,
      link: "https://www.linkedin.com/in/michele-la-torre-a8990b235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgJPSISRmTV6NwCJoTDWNNw%3D%3D",
      title: "LinkedIn",
    },
    {
      icon: iconLinkedin,
      link: "https://www.linkedin.com/in/michele-la-torre-a8990b235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgJPSISRmTV6NwCJoTDWNNw%3D%3D",
      title: "LinkedIn",
    },
  ],
  [
    {
      icon: iconGithubHover,
      link: "https://github.com/samplesamplemic",
      title: "Github",
    },
    {
      icon: iconGithub,
      link: "https://github.com/samplesamplemic",
      title: "Github",
    },
  ],
];
