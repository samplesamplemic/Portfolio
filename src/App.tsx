import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
// import Projects from "./pages/projects";
// import ProjectsCustomCarousel from "./components/projects/projects copy";
import Slider from "./components/projects/carousel";
import Projects from "./pages/projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutMe" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
