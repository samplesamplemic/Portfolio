import workData from "../../assets/data/workData";
import { AboutMe } from "../../model/work";
import { photoClassname } from "../../style/tailwindClassname/photo";
import Slider from "../carousel/carousel";

function Photo() {
  const aboutMe: AboutMe = workData.workitems.aboutMe;

  return (
    <>
      <div className={photoClassname.main}>
        <div className={photoClassname.imgDiv}>
          <img
            className={photoClassname.img}
            src={aboutMe.photo}
            alt="me"
          />
        </div>
        <div className="self-center">
          <div className={photoClassname.secondary}>
            <span className={photoClassname.name}>
              {aboutMe.name}
            </span>
          </div>
          <div>
            <span className={photoClassname.title}>
              {aboutMe.profession}
            </span>
          </div>
        </div>
      </div>
      <Slider />
    </>
  );
}

export default Photo;
