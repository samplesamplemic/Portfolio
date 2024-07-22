import "../../style/projects.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CustomZoomContent } from "./projectZoomCustom";
import Carousel from "react-multi-carousel";
import projectData from "../../assets/data/projectsData";
import { ProjectItems } from "../../model/project";
import "react-multi-carousel/lib/styles.css";
import { projectsClassname } from "../../style/tailwindClassname/projects";
// import githubIcon from "../../assets/icons/icon-github.png";
// import githubIconHover from "../../assets/icons/icon-github-hover.png";
// import { navbarClassname } from "../../style/tailwindClassname/navbar";
import Slider from "../carousel/carousel";
import { GithubSvg } from "../svg/Svg";

function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const projectsData: ProjectItems = projectData;

  return (
    <>
      <Slider />
      <article
        aria-label="Image Carousel"
        className={projectsClassname.article}
      >
        {projectsData.projectItems.map((el, index) => {
          return (
            <section
              className={projectsClassname.section}
              key={index}
            >
              <figure className={projectsClassname.figure}>
                {/* <header className={projectsClassname.header}>
                  <h2 className={projectsClassname.h2}>
                    {el.title}
                  </h2>
                  <GithubSvg
                    link={el.githubSource}
                    tailwindCss={projectsClassname.svg}
                  />
                </header> */}

                <Carousel responsive={responsive}>
                  {el.img.map((img) => {
                    return (
                      <Zoom
                        ZoomContent={CustomZoomContent}
                        key={index}
                      >
                        <img
                          className={projectsClassname.img}
                          src={img}
                          alt={el.title}
                        />
                      </Zoom>
                    );
                  })}
                </Carousel>
                <figcaption className="text-left  gap-1">
                  <header className={projectsClassname.header}>
                    <h2 className={projectsClassname.h2}>
                      {el.title}
                    </h2>
                    <GithubSvg
                      link={el.githubSource}
                      tailwindCss={projectsClassname.svg}
                    />
                  </header>
                  <p className="w-full text-justify">
                    <i className="">{`${el.subTitle}: `}</i>
                    {`${el.description}`} <br />
                  </p>
                  <span className={projectsClassname.state}>{`${
                    el.state ? el.state : ""
                  }`}</span>
                  {el.state ? "" : <br />}
                </figcaption>
              </figure>
            </section>
          );
        })}
      </article>
    </>
  );
}

export default Projects;
