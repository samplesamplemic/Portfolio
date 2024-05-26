import photo from "../../assets/logo_dragon_youtube.png";
import Slider from "../projects/carousel";

function Photo() {
  return (
    <>
      {/* <div className="flex flex-col md:flex-row items-center text-center md:items-start md:text-start"> */}
      {/* <div className="flex flex-col gap-2 "> */}
      <div className="flex flex-col gap-4 text-center mb-4">
        <div className="flex-none md:self-center hidden md:flex">
          <img
            className="w-20 md:w-24 rounded-full border-[1.5px] shadow-lg"
            src={photo}
            alt="me"
          />
        </div>
        <div className="self-center">
          {/* <div className="md:text-3xl text-xl py-1 md:p-2 w-full text-center font-medium bg-navbarBG rounded-md backdrop-blur-sm bg-opacity-10">
                Hi, I'm a{" "}
                <span className="text-secondary underline underline-offset-2 md:text-4xl text-xl">
                  Full-Stack Developer
                </span>{" "}
                from Italy
              </div> */}
          <div className="flex gap-8 justify-center md:justify-start p-2 md:mt-2">
            <span className="md:text-5xl text-3xl text-center font-bold tracking-wide">
              Michele La Torre
            </span>
          </div>
          <div>
            <span className="text-secondary md:text-4xl text-xl font-medium tracking-wide">
              Full-Stack Developer
            </span>
          </div>
        </div>
        {/* <hr className="w-14 h-[.2rem] self-center bg-white border-0 rounded-sm bg-opacity-40" /> */}
      </div>
      <div className="flex-none md:self-start md:hidden self-center mt-4">
        <img
          className="w-20 md:w-24 rounded-full border-[1.5px] shadow-lg"
          src={photo}
          alt="me"
        />
      </div>
      <Slider />
      {/* <div className="flex flex-col md:mt-20 mt-14 text-start">
             <div className="text-xl font-semibold">
              <span className="text-tertiary">{"< "}</span>About me{" "}
              <span className="text-tertiary">{" /> "}</span>
              <hr className="w-14 h-[.2rem] bg-white border-0 rounded-sm bg-opacity-40" />
            </div> 
            <div className="md:w-[65%] flex flex-col">
              <div className="text-xl font-semibold">
                <span className="text-tertiary">{"< "}</span>About me{" "}
                <span className="text-tertiary">{" /> "}</span>
                <hr className="w-14 h-[.2rem] bg-white border-0 rounded-sm bg-opacity-40" />
              </div>
              <div className="">
                <span className="text-secondary text-lg font-medium">
                  Junior Software Developer
                </span>
                <br className="" />
                <span>
                  From humanities studies to the IT sector, I have defined a
                  great passion for building digital services and
                  infrastructures. I'm looking for personal realization and
                  professional development.
                </span>
              </div>
            </div>
          </div> */}
      {/* </div>
      </div> */}
    </>
  );
}

export default Photo;
