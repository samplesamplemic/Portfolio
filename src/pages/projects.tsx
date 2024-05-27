import MultiPage from "../components/navbar/multiPage";
import NavbarSmartphone from "../components/navbar/navbarSmartphone";
import "../index.css";

function Projects() {
  return (
    <>
      <div className="flex flex-col h-full items-center">
        <MultiPage />
        {/* <NavbarMinimal childComponent={<Slider />} /> */}
        <NavbarSmartphone />
      </div>
    </>
  );
}

export default Projects;
