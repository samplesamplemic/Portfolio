import { HomeIcon as HomeHover } from "@heroicons/react/24/solid";
import { HomeIcon as Home } from "@heroicons/react/24/outline";
// import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
import { NewspaperIcon as NewspaperIconHover } from "@heroicons/react/24/solid";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import githubLogo from "../../../assets/icons/icon-github.png";
import githubLogoHover from "../../../assets/icons/icon-github-hover.png";
import { Link } from "react-router-dom";
import { navbarData } from "../../../assets/data/navbarData";
import { NavbarItems } from "../../../model/navbar";
import { navbarClassname } from "../../../style/tailwindClassname/navbar";
// import "./navbar.css";

function NavbarSmartphone() {
  const navbarItems: NavbarItems = navbarData;
  return (
    <>
      <div className="flex justify-around w-full gap-4 z-10 fixed bottom-0 bg-navbarBG rounded-md backdrop-blur-sm bg-opacity-10 border-t border-t-gray-100">
        {navbarItems.navbarItems.map((navbarItem, index) => {
          return (
            <div
              className="p-2 group"
              key={index}
            >
              <Link
                to={navbarItem.link}
                className={navbarClassname.iconLink}
              >
                {
                  <navbarItem.icon
                    className={navbarClassname.navLink}
                    title={navbarItem.title}
                  />
                }
              </Link>
            </div>
          );
        })}
        {/* <a href="">
            <Home
              className="w-6 group-hover:hidden"
              title="home"
            />
            <HomeHover className=" w-6 hidden group-hover:block" />
          </a>
        </div>
        <div className="p-2 group">
          <a href="">
            <img
              src={githubLogo}
              alt="source"
              className="w-6 group-hover:hidden"
            />
            <img
              src={githubLogoHover}
              alt="source"
              className=" w-6 hidden group-hover:block"
            />
          </a>
        </div>
        <div className="group p-2">
          <a href="">
            <NewspaperIcon className="group-hover:hidden w-6" />
            <NewspaperIconHover className="group-hover:block w-6 hidden" />
          </a>
        </div> */}
      </div>
    </>
  );
}

export default NavbarSmartphone;
