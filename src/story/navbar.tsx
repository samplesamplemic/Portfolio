import { useState } from "react";
import "../../index.css";
import "./navbar.css";
import githubLogo from "../../assets/github-mark-white.png";

function Navbar() {
  const [toX, setAnimation] = useState(true);
  const handleAnimation = () => {
    setAnimation(!toX);
  };

  return (
    <>
      <div className="navbar flex md:justify-center justify-end p-3">
        <div
          className={`${
            toX ? "" : "navSmartphone"
          } hidden md:flex gap-6 text-lg items-center`}
        >
          <div className="home flex hover:bg-[#196c8080] rounded-sm">
            <a href="" className="link home p-1">
              Home
            </a>
          </div>
          <div className="portfolio flex hover:bg-[#196c8080] rounded-sm">
            <a href="" className="link portfolio p-1">
              Portfolio
            </a>
          </div>
          <div className="sourceCode flex items-center p-1 hover:bg-[#196c8080] rounded-sm">
            <img src={githubLogo} alt="githubLogo" className="w-5" />
            <a href="" className="link sourceCode  pl-1">
              Source
            </a>
          </div>
        </div>
        <div
          onClick={handleAnimation}
          className={`${
            !toX ? "toX" : "fromX"
          } menu-icon md:hidden flex gap-[0.1rem] flex-wrap cursor-pointer p-2 active:bg-[#196c8080] rounded-sm`}
        >
          <div className="piece-menu flex-[40%] w-1 h-2 bg-white rounded-sm"></div>
          <div className="piece-menu flex-[40%] w-1 h-2 bg-white rounded-sm"></div>
          <div className="piece-menu flex-[40%] w-1 h-2 bg-white rounded-sm"></div>
          <div className="piece-menu flex-[40%] w-1 h-2 bg-white rounded-sm"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
