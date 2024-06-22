import Work from "../components/aboutMe/aboutMe";
import MultiPage from "../components/navbar/multiPage";
import NavbarMinimal from "../components/navbar/navbarMinimal";
import NavbarSmartphone from "../components/navbar/navbarSmartphone";
import "../index.css";

function AboutMe() {
  return (
    <>
      <div className="flex flex-col h-full items-center">
        <MultiPage />
        <NavbarMinimal childComponent={<Work />} />
        <NavbarSmartphone />
      </div>
    </>
  );
}

export default AboutMe;
