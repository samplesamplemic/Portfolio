import MultiPage from "../components/navbar/multiPage";
import Navbar from "../components/navbar/navbar";
import Projects from "../components/projects/projects";

function ProjectsPage() {
  return (
    <>
      <div className="flex flex-col md:h-full items-center">
        <MultiPage />
        <Navbar childComponent={<Projects />} />
      </div>
    </>
  );
}

export default ProjectsPage;
