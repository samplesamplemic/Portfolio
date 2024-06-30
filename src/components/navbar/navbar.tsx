import { Link } from "react-router-dom";
import "../../style/navbar.scss";
import { NavbarItems, NavbarObject } from "../../model/navbar";
import {
  navbarData,
  navbarSocialData,
} from "../../assets/data/navbarData";
import { navbarClassname } from "../../style/tailwindClassname/navbar";

function Navbar() {
  const navbarItems: NavbarItems = navbarData;
  const navbarSocialIcons: NavbarObject[][] = navbarSocialData;
  return (
    <>
      <nav className={navbarClassname.main}>
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
                      className={navbarClassname.iconHover}
                      title={navbarItem.title}
                    />
                  }
                </Link>
              </div>
            );
          })}
        </div>
        {/* <div className="center w-[70%] pt-20">
          {props.childComponent}
        </div>{" "} */}
        {/* w-[80%]*/}
        {/* <div className={navbarClassname.socialIcons}>
          <div className={navbarClassname.iconDimension}></div>
          {navbarSocialIcons.map((navbarSocialIcon, index) => {
            return (
              <div
                className={navbarClassname.groupHoverIcon}
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

          <div className={navbarClassname.iconDimension}></div>
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;
