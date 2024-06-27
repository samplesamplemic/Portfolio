import Projects from "../../components/projects/projects";
import NavbarSmartphone from "../../components/smartphone/navbar/navbarSmartphone";

function ProjectsPage() {
  return (
    <>
      <div className="flex flex-col  bg-gradient-to-t from-primaryRadialBG from-0% to-secondaryRadialBG to-100% justify-center">
        <NavbarSmartphone />
        <Projects />
      </div>
    </>
  );
}

export default ProjectsPage;
