import Work from "../../components/aboutMe/aboutMe";
import NavbarSmartphone from "../../components/smartphone/navbar/navbarSmartphone";
// import {Work}  from "../../components/aboutMe/aboutMe";
import "../../style/navbar.scss";

function AboutMe() {
  return (
    <>
      <div className="sm:h-full pb-16 pt-5 bg-gradient-to-t from-primaryRadialBG from-0% to-secondaryRadialBG to-100%">
        <div className="center">
          <Work />
        </div>
        <NavbarSmartphone />
      </div>
    </>
  );
}

export default AboutMe;
