import workData from "../../assets/data/workData";
import { AboutMe } from "../../model/work";
import { photoClassname } from "../../style/tailwindClassname/photo";

function Photo() {
  const aboutMe: AboutMe = workData.workitems.aboutMe;

  return (
    <>
      <div className={photoClassname.main}>
        <div className="flex-1 flex flex-col items-center">
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
        <div className={photoClassname.imgDiv}>
          <img
            className={photoClassname.img}
            src={aboutMe.photo}
            alt="me"
          />
        </div>
      </div>
    </>
  );
}

export default Photo;
