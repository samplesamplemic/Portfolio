import "./projects.css";
import flutterApp from "../../assets/projects/flutterApp.png";
import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CustomZoomContent } from "./projectZommCustom";

function Projects() {
  const [toX, setAnimation] = useState(true);
  const handleAnimation = () => {
    setAnimation(!toX);
  };
  return (
    <>
      <div className="projects flex flex-col flex-wrap gap-8 items-center justify-center text-center">
        <div className=" flex justify-between">
          <div className="w-[45%] flex flex-col gap-4 p-6 items-center">
            <div
              className={
                // ` ${ !toX ? "test" : "test2"}
                "w-[50%] flex flex-col gap-1 items-center cursor-pointer"
              }
            >
              {/* <XMarkIcon
                onClick={handleAnimation}
                className={`${
                  !toX ? "" : "hidden"
                } w-4 cursor-pointer hover:bg-secondary rounded-sm`}
              ></XMarkIcon> */}

              <Zoom zoomMargin={40} ZoomContent={CustomZoomContent}>
                <img
                  src={flutterApp}
                  alt="test"
                  onClick={handleAnimation}
                  className=" !bg-secondaryRadialBG"
                  // className={`${!toX ? "test" : ""} w-[50%] `}
                />
              </Zoom>
            </div>
            <div className="">
              <span>Title</span>
              <span>
                Kotlin App - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </span>
            </div>
          </div>
          <div className="w-[45%] flex flex-col gap-4 p-6 items-center">
            <img src={flutterApp} alt="" className="w-[50%]" />
            <div>
              <span>Title</span>
              <span>
                Kotlin App - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </span>
            </div>
          </div>
        </div>
        <div className=" flex justify-between">
          <div className="w-[45%] flex flex-col gap-4 p-6 items-center">
            <img src={flutterApp} alt="" className="w-[50%]" />
            <div>
              <span>Title</span>
              <span>
                Kotlin App - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </span>
            </div>
          </div>
          <div className="w-[45%] flex flex-col gap-4 p-6 items-center">
            <img src={flutterApp} alt="" className="w-[50%]" />
            <div>
              <span>Title</span>
              <span>
                Kotlin App - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
