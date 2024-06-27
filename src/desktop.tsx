import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
import Projects from "./pages/projects";

function Desktop() {
  return (
    <>
      <div className="h-full hidden md:block">
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
              element={<Projects />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Desktop;
