import { navbarSocialData } from "../../assets/data/navbarData";
import { NavbarObject } from "../../model/navbar";
import "../../style/navbar.scss";
import { navbarClassname } from "../../style/tailwindClassname/navbar";

function Social() {
  const navbarSocialIcons: NavbarObject[][] = navbarSocialData;

  return (
    <>
      <div>
        <div className={navbarClassname.socialIcons}>
          {/* <div className={navbarClassname.iconDimension}></div> */}
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

          {/* <div className={navbarClassname.iconDimension}></div> */}
        </div>
      </div>
    </>
  );
}

export default Social;
