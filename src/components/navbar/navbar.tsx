import { useState } from "react";
import "../../index.css";

function Navbar() {
  const [toX, setAnimation] = useState(false);
  const handleAnimation = () => {
    setAnimation(!toX);
  };

  return (
    <>
      {/* <div className="font-sansCondensed font-thin text-xl text-white text-center ">
        test
      </div> */}
      <div className="navbar flex md:justify-center justify-end items-center p-3">
        <div className="nav hidden md:flex gap-2 ">
          <div className="home">
            <a
              href=""
              className="link home p-2 hover:bg-[#196c8080]  rounded-sm"
            >
              Home
            </a>
          </div>
          <div className="portfolio">
            <a
              href=""
              className="link portfolio p-2 hover:bg-[#196c8080] rounded-sm"
            >
              Portfolio
            </a>
          </div>
        </div>
        <div
          onClick={handleAnimation}
          className={`${
            toX ? "toX" : "fromX"
          } menu-icon md:hidden flex gap-[0.1rem] flex-wrap cursor-pointer p-3 active:bg-[#196c8080] rounded-sm`}
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
