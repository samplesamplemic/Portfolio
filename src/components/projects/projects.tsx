import { dictionaryDesign } from "../../assets/projects/dictionaryDesign.png";
import flutterApp from "../../assets/projects/flutterApp.png";

function Projects() {
  return (
    <>
      <div className="projects flex flex-col flex-wrap gap-8 items-center justify-center text-center">
        <div className=" flex justify-between">
          <div className="w-[45%] flex flex-col gap-4 p-6 items-center">
            <img src={flutterApp} alt="" className="w-[50%]" />
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
