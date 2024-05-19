import Work from "../components/aboutMe/work";
import MultiPage from "../components/navbar/multiPage";
import NavbarMinimal from "../components/navbar/navbarMinimal";
import NavbarSmartphone from "../components/navbar/navbarSmartphone";
import "../index.css";

function AboutMe() {
  return (
    <>
      {/* <NavbarDesktop /> */}
      <div className="flex flex-col h-full items-center">
        <MultiPage />
        <NavbarMinimal childComponent={<Work />} />

        {/* <Work /> */}
        {/* <Photo /> */}
        {/* <Work /> */}
        <NavbarSmartphone />
      </div>
    </>
  );
}

export default AboutMe;
