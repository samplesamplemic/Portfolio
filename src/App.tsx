import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutMe" element={<AboutMe />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
