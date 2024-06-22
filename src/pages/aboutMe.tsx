import Work from "../components/aboutMe/aboutMe";
import MultiPage from "../components/navbar/multiPage";
import NavbarMinimal from "../components/navbar/navbarMinimal";

function AboutMe() {
  return (
    <>
      <div className="flex flex-col h-full items-center">
        <MultiPage />
        <NavbarMinimal childComponent={<Work />} />
      </div>
    </>
  );
}

export default AboutMe;
