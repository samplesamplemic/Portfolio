import { useState } from "react";
import "../../index.css";
import "../../style/navbar.scss";

function MultiPage() {
  const [toX, setAnimation] = useState(true);
  const handleAnimation = () => {
    setAnimation(!toX);
  };

  return (
    <>
      <div
        onClick={handleAnimation}
        className={`${
          !toX ? "toX" : "fromX"
        } menu-icon w-10 hidden md:flex gap-[0.1rem] flex-wrap fixed left-8 top-8 cursor-pointer p-2 active:bg-[#196c8080] rounded-sm`}
      >
        <div className="piece-menu flex-[40%] w-1 h-2 bg-white rounded-sm"></div>
        <div className="piece-menu flex-[40%] w-1 h-2 bg-white rounded-sm"></div>
        <div className="piece-menu flex-[40%] w-1 h-2 bg-white rounded-sm"></div>
        <div className="piece-menu flex-[40%] w-1 h-2 bg-white rounded-sm"></div>
      </div>
    </>
  );
}

export default MultiPage;
