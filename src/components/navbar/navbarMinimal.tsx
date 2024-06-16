import { Link } from "react-router-dom";
import "./navbar.css";
import { ReactElement } from "react";
import { NavbarObject, PortfolioObject } from "../../model/dataInterfaces";
import { PortfolioData } from "../../assets/data/portfoglioData";
import { navbarSocialData } from "../../assets/data/navbarData";

function NavbarMinimal(props: { childComponent: ReactElement }) {
  const portfolioData: PortfolioObject = PortfolioData;
  const navbarSocialIcons: NavbarObject[][] = navbarSocialData;
  return (
    <>
      <div className="w-full flex flex-1 justify-between items-center">
        <div className="flex flex-col font-medium p-10 gap-16 border-r-2 border-tertiary">
          {portfolioData.navbarItems.map((navbarItem) => {
            return (
              <div>
                <Link
                  to={navbarItem.link}
                  className="homeLink hover:animate-bounce hover:text-secondary hover:border-b-[3px] border-secondary"
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
          {navbarSocialIcons.map((navbarSocialIcon) => {
            return (
              <div className="group cursor-pointer">
                <img
                  src={navbarSocialIcon[0].icon.toString()}
                  alt={navbarSocialIcon[0].title}
                  title={navbarSocialIcon[0].title}
                  className="w-6 hidden group-hover:block"
                />
                <img
                  src={navbarSocialIcon[1].icon.toString()}
                  alt={navbarSocialIcon[1].title}
                  title={navbarSocialIcon[1].title}
                  className="w-6 group-hover:hidden"
                />
              </div>
            );
          })}

          <div className="w-6 h-6"></div>
        </div>
      </div>
    </>
  );
}

export default NavbarMinimal;
