import WorkExp from "./workExp";

function Work() {
  return (
    <>
      <div className="mx-10 flex flex-col gap-8 items-center text-center">
        <div className=" flex flex-col gap-2 md:w-[80%]">
          <div className="text-xl font-semibold flex flex-col items-center">
            About me
            <hr className="w-14 h-[.2rem] bg-white border-0 rounded-sm bg-opacity-40" />
          </div>
          <div className="text-">
            <span className="text-lg font-medium text-secondary">
              Jr. Software Developer
            </span>
            <br />
            From humanities studies to the IT sector, I have defined a great
            passion for building digital services and infrastructures. I'm
            looking for personal realization and professional development.
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
