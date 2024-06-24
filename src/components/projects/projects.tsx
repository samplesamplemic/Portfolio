import "../../style/projects.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CustomZoomContent } from "./projectZoomCustom";
import Carousel from "react-multi-carousel";
import projectData from "../../assets/data/projectsData";
import { ProjectItems } from "../../model/project";
import "react-multi-carousel/lib/styles.css";
import { projectsClassname } from "../../style/tailwindClassname/projects";

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
                      className="sliderProj"
                      key={index}
                    >
                      <Zoom ZoomContent={CustomZoomContent}>
                        <img
                          className="test w-40 h-40 object-cover"
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
              <div className="mt-2">
                <a
                  href={el.githubSource}
                  target="_blank"
                  className="text-center text-nowrap px-3 py-1 m-4 text-secondary font-semibold text-lg rounded-sm hover:text-white hover:bg-secondary hover:transition-all hover:duration-300"
                  title="Github source"
                >
                  {el.title}
                </a>
              </div>
              <div>
                {`${el.description} - `}{" "}
                <span className={projectsClassname.state}>{`${el.state}`}</span>
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
