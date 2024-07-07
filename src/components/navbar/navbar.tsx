import { Link, useLocation } from "react-router-dom";
import "../../style/navbar.scss";
import { NavbarItems } from "../../model/navbar";
import { navbarData } from "../../assets/data/navbarData";
import { navbarClassname } from "../../style/tailwindClassname/navbar";
import { createRef, useEffect, useRef } from "react";

function Navbar() {
  const inputRef = useRef(null);
  const navbarItems: NavbarItems = navbarData;
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    // const test = document.getElementsByClassName("navLink");
    const test = document.querySelectorAll(".navLink");
    console.log(location);
    switch (location.pathname) {
      case "/":
        return test[0].classList.add(
          // "bg-secondary",
          // "hover:text-white",
          // "underline",
          // "underline-offset-2",
          "navbarIcon"
          // "text-secondary",
          // "hover:text-white",
          // "hover:transition-all",
          // "hover:duration-300"
        );
      case "/projects":
        return test[1].classList.add(
          // "underline",
          // "underline-offset-2"
          "navbarIcon"
        );
      // case "/contactMe":
      //   return test[2].classList.add("bg-secondary");
    }
    // handlebg(test[0]);
  }, [location]);
  // const handlebg = (e) => {
  //   const test = document.querySelectorAll(".navLink");
  //   test.forEach((el) => {
  //     if (el == e) {
  //       el.classList.add("bg-secondary");
  //     } else {
  //       el.classList.remove("bg-secondary");
  //     }
  //   });
  //   console.log(e);
  // };

  return (
    <>
      <nav className={navbarClassname.main}>
        <div className={navbarClassname.menuIcons}>
          {navbarItems.navbarItems.map((navbarItem, index) => {
            return (
              <Link
                to={navbarItem.link}
                key={index}
              >
                {
                  // <navbarItem.icon
                  //   className={navbarClassname.iconHover}
                  //   title={navbarItem.title}
                  // />
                  <span
                    // onClick={(e) => handlebg(e.target)}
                    className={`${navbarClassname.iconHover} navLink `}
                  >
                    {navbarItem.title}
                  </span>
                }
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
