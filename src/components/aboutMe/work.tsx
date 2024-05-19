function Work() {
  return (
    <>
      <div className="mx-10 flex flex-col gap-8 items-center">
        <div className=" flex flex-col gap-2 md:w-[60%]">
          <div className="text-xl font-semibold">
            About me
            <hr className="w-14 h-[.2rem] bg-white border-0 rounded-sm bg-opacity-40" />
          </div>
          <div className="text-">
            <span className="text-lg text-secondary">
              Jr. Software Developer
            </span>
            <br />
            From humanities studies to the IT sector, I have defined a great
            passion for building digital services and infrastructures. I'm
            looking for personal realization and professional development.
          </div>
        </div>
        <div className=" flex flex-col gap-2 md:w-[60%]">
          <div className="text-xl font-semibold">
            Work
            <hr className="w-14 h-[.2rem] bg-white border-0 rounded-sm bg-opacity-40" />
          </div>
          <div className="text-">
            <span className="text-lg text-secondary">
              Capgemini - Analist Consultant
            </span>
            <br />
            <span className="italic">Apprenticeship</span>
            <br />
            <span className="font-medium">2022 </span>
            Nov - Current
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
