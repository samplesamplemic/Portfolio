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
        {/* <div className=" flex-[100%] flex flex-col gap-2"> */}
        {/* <h1 className="md:hidden flex-[100%] text-start text-2xl font-extrabold pt-4">
          Projects
        </h1> */}
        {/* <hr
            className={`${projectsClassname.divider} w-[80%]`}
          /> */}
        {/* </div> */}
        {projectsData.projectItems.map((el, index) => {
          return (
            <section
              className={projectsClassname.section}
              key={index}
            >
              <figure className="m-2 flex flex-col">
                <h2 className={projectsClassname.h2}>
                  {el.title}
                </h2>
                <Carousel responsive={responsive}>
                  {el.img.map((img) => {
                    return (
                      <Zoom
                        ZoomContent={CustomZoomContent}
                        key={index}
                      >
                        <img
                          className={`${projectsClassname.img} rounded-md hover:scale-110 hover:shadow-[rgba(0,0,15,0.5)_3px_3px_3px_3px] hover:transition-all hover:duration-300 `}
                          src={img}
                          alt={el.title}
                        />
                      </Zoom>
                    );
                  })}
                </Carousel>
                {/* <h2 className="flex justify-around items-center mb-4"> */}
                {/* <strong
                    className={projectsClassname.a}
                    title="Github source"
                  >
                    {el.title}
                  </strong> */}
                {/* <span>
                    <GithubSvg
                      link={el.githubSource}
                      tailwindCss="scale-105"
                    />
                  </span> */}
                {/* </h2> */}
                <figcaption className="font-light text-left flex flex-col gap-1">
                  <span className="flex">
                    <em className="font-medium italic flex-1 item-center">
                      {`${el.subTitle}`}
                    </em>
                    <GithubSvg
                      link={el.githubSource}
                      tailwindCss="scale-105 rounded-full shadow-[rgba(30,136,196,1)_1px_1px_10px_0px]"
                      // rgba(114,158,188,1)
                    />
                  </span>
                  <span className="w-full ">
                    {`${el.description}`} <br />
                  </span>
                  <span className={projectsClassname.state}>{`${
                    el.state ? el.state : ""
                  }`}</span>
                  {el.state ? "" : <br />}
                </figcaption>
              </figure>
              {/* <hr className={projectsClassname.divider} /> */}
            </section>
          );
        })}
      </article>
    </>
  );
}

export default Projects;
