import workData from "../../assets/data/workData";
import WorkPositions from "./workPositions";
import { AboutMe } from "../../model/work";
import { aboutMeClassname } from "../../style/tailwindClassname/aboutMe";
import Social from "../social/Social";

function Work() {
  const aboutMe: AboutMe = workData.workitems.aboutMe;
  return (
    <>
      <div className={aboutMeClassname.main}>
        <div className={aboutMeClassname.aboutMe}>
          <div className={aboutMeClassname.title}>
            About me
            <hr className={aboutMeClassname.divider} />
          </div>
          <div>
            <span className={aboutMeClassname.description}>
              {aboutMe.work}
            </span>
            <br />
            {aboutMe.goalDescription}
          </div>
        </div>
        <div className={aboutMeClassname.workSection}>
          <div className={aboutMeClassname.work}>
            Work
            <hr className={aboutMeClassname.divider} />
          </div>
          <WorkPositions />
        </div>
        <div>
          <div className={aboutMeClassname.work}>
            Social
            <hr className={aboutMeClassname.divider} />
          </div>
          <Social />
        </div>
      </div>
    </>
  );
}

export default Work;
