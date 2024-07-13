import workData from "../../assets/data/workData";
import WorkPositions from "./workPositions";
import { AboutMe } from "../../model/work";
import { aboutMeClassname } from "../../style/tailwindClassname/aboutMe";
import Social from "../social/Social";

function Work() {
  const aboutMe: AboutMe = workData.workitems.aboutMe;
  return (
    <>
      <article className={aboutMeClassname.section}>
        <section className={aboutMeClassname.article}>
          <h2 className={aboutMeClassname.h2}>About me</h2>
          <p>
            <span className={aboutMeClassname.span}>
              {aboutMe.work}
            </span>
            <br />
            {aboutMe.goalDescription}
          </p>
        </section>
        <section className={aboutMeClassname.article}>
          <h2 className={aboutMeClassname.h2}>Work</h2>
          <WorkPositions />
        </section>
        <section>
          <h2 className={aboutMeClassname.h2}>Social</h2>
          <Social />
        </section>
      </article>
    </>
  );
}

export default Work;
