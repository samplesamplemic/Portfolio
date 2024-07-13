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
      <article className={projectsClassname.article}>
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
              <figure className="m-2 rounded-md">
                <Carousel responsive={responsive}>
                  {el.img.map((img) => {
                    return (
                      <Zoom
                        ZoomContent={CustomZoomContent}
                        key={index}
                      >
                        <img
                          className={`${projectsClassname.img} rounded-md m-2 hover:scale-110 hover:shadow-[rgba(0,0,15,0.5)_3px_3px_3px_3px] hover:transition-all hover:duration-300 `}
                          src={img}
                          alt={el.title}
                        />
                      </Zoom>
                    );
                  })}
                </Carousel>
                <h2>
                  <a
                    href={el.githubSource}
                    target="_blank"
                    className={projectsClassname.a}
                    title="Github source"
                  >
                    {el.title}
                    <span>
                      <GithubSvg />
                    </span>
                  </a>
                </h2>
                <figcaption className="font-light text-left indent-1">
                  <strong className="font-medium italic">
                    {`${el.subTitle}: `}
                  </strong>
                  {`${el.description}`} <br />
                  <span className={projectsClassname.state}>{`${
                    el.state ? el.state : ""
                  }`}</span>
                  {el.state ? "" : <br />}
                </figcaption>
              </figure>
              <hr className={projectsClassname.divider} />
            </section>
          );
        })}
      </article>
    </>
  );
}

export default Projects;
