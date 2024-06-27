import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/smartphone/home";
import AboutMe from "./pages/smartphone/aboutMe";
import ProjectsPage from "./pages/smartphone/projects";

function Smartphone() {
  return (
    <>
      <div className="h-full md:hidden block">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            ></Route>
            <Route
              path="/aboutMe"
              element={<AboutMe />}
            ></Route>
            <Route
              path="/projects"
              element={<ProjectsPage />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Smartphone;
