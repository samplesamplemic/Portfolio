import { NavbarItems } from "../../model/navbar";
import { HomeIcon } from "@heroicons/react/24/solid";
import { InboxIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export const navbarData: NavbarItems = {
  navbarItems: [
    {
      icon: HomeIcon,
      link: "/",
      title: "Home",
    },
    // {
    //   icon: UserCircleIcon,
    //   link: "/aboutMe",
    //   title: "About me",
    // },
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
