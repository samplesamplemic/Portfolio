import "../../style/projects.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CustomZoomContent } from "./projectZoomCustom";
import Carousel from "react-multi-carousel";
import projectData from "../../assets/data/projectsData";
import { ProjectItems } from "../../model/project";
import "react-multi-carousel/lib/styles.css";

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
      <div className="flex flex-row items-center text-center flex-wrap justify-between gap-4">
        {projectsData.projectItems.map((el, index) => {
          return (
            <div className="parent w-[45%] flex flex-col gap-2" key={index}>
              <Carousel responsive={responsive}>
                {el.img.map((img) => {
                  return (
                    <div className="sliderProj" key={index}>
                      <Zoom ZoomContent={CustomZoomContent}>
                        <img src={img} alt={el.title} />
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
              <div>
                <a
                  href={el.githubSource}
                  target="_blank"
                  className="text-center text-nowrap px-1 m-4 text-lg rounded-sm hover:bg-secondary hover:transition-all hover:duration-300"
                  title="Github source"
                >
                  {el.title}
                </a>
              </div>
              <div>
                {`${el.description} - `}{" "}
                <span className="text-tertiary">{`${el.state}`}</span>
              </div>
              <hr className="w-10 h-1 self-center bg-white border-0 rounded-sm bg-opacity-40" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
