import workData from "../../assets/data/workData";
import WorkPositions from "./workPositions";
import { AboutMe } from "../../model/work";
import { aboutMeClassname } from "../../style/tailwindClassname/aboutMe";
import Social from "../social/Social";

function Work() {
  const aboutMe: AboutMe = workData.workitems.aboutMe;
  return (
    <>
      <section className={aboutMeClassname.main}>
        <article className={aboutMeClassname.aboutMe}>
          <h2 className={aboutMeClassname.titleSection}>
            About me
          </h2>
          <p>
            <span className={aboutMeClassname.description}>
              {aboutMe.work}
            </span>
            <br />
            {aboutMe.goalDescription}
          </p>
        </article>
        <article className={aboutMeClassname.workSection}>
          <h2 className={aboutMeClassname.titleSection}>Work</h2>
          <WorkPositions />
        </article>
        <article>
          <h2 className={aboutMeClassname.titleSection}>
            Social
          </h2>
          <Social />
        </article>
      </section>
    </>
  );
}

export default Work;
