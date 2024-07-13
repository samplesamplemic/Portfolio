import workData from "../../assets/data/workData";
import { AboutMe } from "../../model/work";
import { photoClassname } from "../../style/tailwindClassname/photo";

function Photo() {
  const aboutMe: AboutMe = workData.workitems.aboutMe;

  return (
    <>
      <header className={photoClassname.header}>
        <article className="flex-1 flex flex-col gap-1 items-center">
          <h1 className={photoClassname.h1}>{aboutMe.name}</h1>
          <h2 className={photoClassname.h2}>
            {aboutMe.profession}
          </h2>
        </article>
        <img
          className={photoClassname.img}
          src={aboutMe.photo}
          alt="me"
        />
      </header>
    </>
  );
}

export default Photo;
