import photo from "../../assets/icons/logo_dragon_youtube.png";
import { photoClassname } from "../../style/tailwindClassname/photo";
import Slider from "../carousel/carousel";

function Photo() {
  return (
    <>
      <div className={photoClassname.main}>
        <div className={photoClassname.imgDiv}>
          <img
            className={photoClassname.img}
            src={photo}
            alt="me"
          />
        </div>
        <div className="self-center">
          <div className={photoClassname.secondary}>
            <span className={photoClassname.name}>
              Michele La Torre
            </span>
          </div>
          <div>
            <span className={photoClassname.title}>
              Full-Stack Developer
            </span>
          </div>
        </div>
        {/* <hr className="w-14 h-[.2rem] self-center bg-white border-0 rounded-sm bg-opacity-40" /> */}
      </div>
      {/* <div className="flex-none md:self-start md:hidden self-center mt-4">
        <img
          className="w-20 md:w-24 rounded-full border-[1.5px] shadow-lg"
          src={photo}
          alt="me"
        />
      </div> */}
      <Slider />
    </>
  );
}

export default Photo;
