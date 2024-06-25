import { Link } from "react-router-dom";
import "../../style/navbar.scss";
import { ReactElement } from "react";
import { NavbarItems, NavbarObject } from "../../model/navbar";
import {
  navbarData,
  navbarSocialData,
} from "../../assets/data/navbarData";
import { navbarClassname } from "../../style/tailwindClassname/navbar";

function NavbarMinimal(props: { childComponent: ReactElement }) {
  const navbarItems: NavbarItems = navbarData;
  const navbarSocialIcons: NavbarObject[][] = navbarSocialData;
  return (
    <>
      <div className={navbarClassname.main}>
        <div className={navbarClassname.menuIcons}>
          {navbarItems.navbarItems.map((navbarItem, index) => {
            return (
              <div key={index}>
                <Link
                  to={navbarItem.link}
                  className={navbarClassname.iconLink}
                >
                  {
                    <navbarItem.icon
                      className={navbarClassname.iconTitle}
                      title={navbarItem.title}
                    />
                  }
                </Link>
              </div>
            );
          })}
        </div>
        <div className="center w-[70%]">
          {props.childComponent}
        </div>{" "}
        {/* w-[80%]*/}
        <div className={navbarClassname.socialIcons}>
          <div className="w-6 h-6"></div>
          {navbarSocialIcons.map((navbarSocialIcon, index) => {
            return (
              <div
                className="group cursor-pointer"
                key={index}
              >
                <a
                  href={navbarSocialIcon[0].link}
                  target="_blank"
                >
                  <img
                    src={navbarSocialIcon[0].icon.toString()}
                    alt={navbarSocialIcon[0].title}
                    title={navbarSocialIcon[0].title}
                    className={navbarClassname.socialIconHover}
                  />
                </a>

                <img
                  src={navbarSocialIcon[1].icon.toString()}
                  alt={navbarSocialIcon[1].title}
                  title={navbarSocialIcon[1].title}
                  className={navbarClassname.socialIcon}
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
