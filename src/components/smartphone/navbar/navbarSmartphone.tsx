import { Link } from "react-router-dom";
import { navbarData } from "../../../assets/data/navbarData";
import { NavbarItems } from "../../../model/navbar";
import { navbarClassname } from "../../../style/tailwindClassname/navbar";
// import "./navbar.css";

function NavbarSmartphone() {
  const navbarItems: NavbarItems = navbarData;
  return (
    <>
      <nav className={navbarClassname.navSmartphone}>
        {/* bg-navbarBG rounded-md backdrop-blur-sm bg-opacity-10 border-t border-t-gray-100 */}
        <hr className={navbarClassname.hr} />
        <header className={navbarClassname.header}>
          {navbarItems.navbarItems.map((navbarItem, index) => {
            return (
              <Link
                to={navbarItem.link}
                key={index}
              >
                {
                  <span
                    className={`${navbarClassname.navLink} navLink`}
                  >
                    <navbarItem.icon
                      width={25}
                      title={navbarItem.title}
                    />
                  </span>
                }
              </Link>
            );
          })}
        </header>
      </nav>
    </>
  );
}

export default NavbarSmartphone;
