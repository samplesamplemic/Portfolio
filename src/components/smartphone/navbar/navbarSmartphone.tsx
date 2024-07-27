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
        <hr className=" items-center w-full h-[.1rem] border-none rounded-[50%] bg-[rgba(30,136,196,1)] drop-shadow-[rgba(30,136,196,1)_1px_1px_20px] neonEffectText" />
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
