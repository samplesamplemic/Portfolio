import workData from "../../assets/data/workData";
import WorkExp from "./workExp";
import { AboutMe } from "../../model/dataInterfaces";

function Work() {
  const aboutMe: AboutMe = workData.aboutMe;
  return (
    <>
      <div className="w-[70%] m-auto flex flex-col gap-8 items-center text-center">
        <div className=" flex flex-col gap-2 md:w-[80%]">
          <div className="text-xl font-semibold flex flex-col items-center">
            About me
            <hr className="w-14 h-[.2rem] bg-white border-0 rounded-sm bg-opacity-40" />
          </div>
          <div className="text-">
            <span className="text-lg font-medium text-secondary">
              {aboutMe.work}
            </span>
            <br />
            {aboutMe.goalDescription}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-[80%] items-center">
          <div className="text-xl font-semibold flex flex-col">
            Work
            <hr className="w-14 h-[.2rem] bg-white border-0 rounded-sm bg-opacity-40" />
          </div>
          <WorkExp />
        </div>
      </div>
    </>
  );
}

export default Work;
