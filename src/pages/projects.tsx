import MultiPage from "../components/navbar/multiPage";
import NavabarMinimal from "../components/navbar/navbarMinimal";
import NavbarSmartphone from "../components/navbar/navbarSmartphone";
import Slider from "../components/projects/carousel";
// import ProjectsCarousel from "../components/projects/projects";
// import ProjectsCustomCarousel from "../components/projects/projects copy";
import "../index.css";

function Projects() {
  return (
    <>
      {/* <NavbarDesktop /> */}
      <div className="flex flex-col h-full items-center">
        <MultiPage />
        <NavabarMinimal childComponent={<Slider />} />
        {/* <Photo /> */}
        {/* <Work /> */}
        <NavbarSmartphone />
      </div>
    </>
  );
}

export default Projects;
