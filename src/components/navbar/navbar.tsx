import { Link, useLocation } from "react-router-dom";
import "../../style/navbar.scss";
import { NavbarItems } from "../../model/navbar";
import { navbarData } from "../../assets/data/navbarData";
import { navbarClassname } from "../../style/tailwindClassname/navbar";
import { useEffect } from "react";

function Navbar() {
  const navbarItems: NavbarItems = navbarData;
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const test = document.querySelectorAll(".navLink");
    switch (location.pathname) {
      case "/":
        return test[0].classList.add("navbarIcon");
      case "/projects":
        return test[1].classList.add("navbarIcon");
      // case "/contactMe":
      //   return test[2].classList.add("bg-secondary");
    }
  }, [location]);

  return (
    <>
      <nav className={navbarClassname.nav}>
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
                    {/* {navbarItem.title} */}
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

export default Navbar;
