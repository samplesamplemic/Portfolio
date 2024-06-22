import "./projects.css";
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
      <div className="flex flex-col items-center flex-wrap justify-between gap-4">
        {projectsData.projectItems.map((el, index) => {
          return (
            <div className="parent w-[45%] flex flex-col" key={index}>
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
                  className="text-center text-nowrap m-4 text-lg rounded-sm hover:bg-secondary hover:transition-all hover:duration-300"
                  title="Github source"
                >
                  {el.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
