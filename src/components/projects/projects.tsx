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
      <div className={projectsClassname.main}>
        <div className="md:hidden flex-[100%] flex flex-col gap-2">
          <h1 className="text-2xl font-extrabold pt-4">
            Projects
          </h1>
          <hr
            className={`${projectsClassname.divider} w-[80%]`}
          />
        </div>
        {projectsData.projectItems.map((el, index) => {
          return (
            <div
              className={projectsClassname.singleProj}
              key={index}
            >
              <Carousel responsive={responsive}>
                {el.img.map((img) => {
                  return (
                    <div
                      className="sliderProj m-2 rounded-md shadow-[rgba(0,0,15,0.5)_3px_3px_3px_3px]"
                      key={index}
                    >
                      <Zoom ZoomContent={CustomZoomContent}>
                        <img
                          className={projectsClassname.img}
                          src={img}
                          alt={el.title}
                        />
                        {/* <CustomZoomImage
                          img={el}
                          title={el.title}
                          description={el.description}
                          githubSource={el.githubSource}
                        /> */}
                      </Zoom>
                    </div>
                  );
                })}
              </Carousel>
              <div className="mt-2 flex gap-2 items-center justify-center">
                <a
                  href={el.githubSource}
                  target="_blank"
                  className={projectsClassname.title}
                  title="Github source"
                >
                  {el.title}
                </a>
                {/* <div className="group cursor-pointer border hover:border-secondary rounded-md">
                  <a
                    href={el.githubSource}
                    target="_blank"
                  >
                    <img
                      src={githubIconHover}
                      className={`${navbarClassname.socialIconHover} m-1`}
                    />
                  </a>

                  <img
                    src={githubIcon}
                    className={`${navbarClassname.socialIcon} m-1`}
                  />
                </div> */}
              </div>
              <div className="font-light">
                {`${el.description}`} <br />
                <span
                  className={projectsClassname.state}
                >{`${el.state}`}</span>
              </div>
              <hr className={projectsClassname.divider} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
