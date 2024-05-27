import photo from "../../assets/icons/logo_dragon_youtube.png";
import Slider from "../carousel/carousel";

function Photo() {
  return (
    <>
      <div className="flex flex-col gap-4 text-center mb-4">
        <div className="flex-none md:self-center hidden md:flex">
          <img
            className="w-20 md:w-24 rounded-full border-[1.5px] shadow-lg"
            src={photo}
            alt="me"
          />
        </div>
        <div className="self-center">
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
    </>
  );
}

export default Photo;
