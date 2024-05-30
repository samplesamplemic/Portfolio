import { Link } from "react-router-dom";
import { HomeIcon as Home } from "@heroicons/react/24/solid";
import { InboxIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import "./navbar.css";
import iconLinkedin from "../../assets/icons/icon-linkedin.png";
import iconLinkedinHover from "../../assets/icons/icon-linkedin-hover.png";
import iconGithub from "../../assets/icons/icno-github.png";
import iconGithubHover from "../../assets/icons/icon-github-hover.png";
import { ReactElement } from "react";
import { PortfolioObject } from "../../model/workObject";
import { PortfolioData } from "../../assets/data/portfoglioData";

function NavbarMinimal(props: { childComponent: ReactElement }) {
  const portfolioData: PortfolioObject = PortfolioData;

  return (
    <>
      <div className="w-full flex flex-1 justify-between items-center">
        <div className="flex flex-col font-medium p-10 gap-16 border-r-2 border-tertiary">
          {portfolioData.navbarItems.map((navbarItem) => {
            return (
              <div>
                <Link
                  to={navbarItem.link}
                  className="homeLink hover:text-secondary hover:border-b-[3px] border-secondary"
                >
                  {
                    <navbarItem.icon
                      className="w-6 hover:text-secondary"
                      title={navbarItem.title}
                    />
                  }
                </Link>
              </div>
            );
          })}
        </div>
        <div className="center w-[70%]">{props.childComponent}</div>{" "}
        {/* w-[80%]*/}
        <div className="flex flex-col gap-16 p-10 border-l-2 border-tertiary">
          <div className="w-6 h-6"></div>
          <div className="group cursor-pointer">
            <img
              src={iconLinkedinHover}
              alt="LinkedIn"
              title="Linkedln"
              className="w-6 hidden group-hover:block"
            />
            <img
              src={iconLinkedin}
              alt="LinkedIn"
              title="Linkedln"
              className="w-6 group-hover:hidden"
            />
          </div>
          <div className="group cursor-pointer">
            <img
              src={iconGithubHover}
              alt="Github"
              title="Source"
              className="w-6 hidden group-hover:block"
            />
            <img
              src={iconGithub}
              alt="Github"
              title="Source"
              className="w-6 group-hover:hidden"
            />
          </div>
          <div className="w-6 h-6"></div>
        </div>
      </div>
    </>
  );
}

export default NavbarMinimal;
