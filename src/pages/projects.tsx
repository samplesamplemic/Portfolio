import MultiPage from "../components/navbar/multiPage";
import NavbarMinimal from "../components/navbar/navbarMinimal";
import "../index.css";
import Projects from "../components/projects/projects";

function ProjectsPage() {
  return (
    <>
      <div className="flex flex-col h-full items-center">
        <MultiPage />
        <NavbarMinimal childComponent={<Projects />} />
      </div>
    </>
  );
}

export default ProjectsPage;
