import Main from "../components/main/Main";
import Navbar from "../components/navbar/navbar";
import Projects from "../components/projects/projects";

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <Main childComponent={<Projects />} />
    </>
  );
}

export default ProjectsPage;
