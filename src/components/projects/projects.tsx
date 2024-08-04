import "../../style/projects.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CustomZoomContent } from "./projectZoomCustom";
import Carousel from "react-multi-carousel";
import projectData from "../../assets/data/projectsData";
import { ProjectItems } from "../../model/project";
import "react-multi-carousel/lib/styles.css";
import { projectsClassname } from "../../style/tailwindClassname/projects";
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
        <span className="flex-[100%]">
          <h2 className={projectsClassname.h2}>Work</h2>
        </span>
        {projectsData.projectItems.map((el, index) => {
          return (
            <section
              className={projectsClassname.section}
              key={index}
            >
              <figure className={projectsClassname.figure}>
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
                <figcaption
                  className={projectsClassname.figcaption}
                >
                  <header className={projectsClassname.header}>
                    <h2 className={projectsClassname.h3}>
                      {el.title}
                    </h2>
                    <GithubSvg
                      link={el.githubSource}
                      tailwindCss={projectsClassname.svg}
                    />
                  </header>
                  <p className={projectsClassname.p}>
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
