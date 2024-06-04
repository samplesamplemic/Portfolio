import "./projects.css";
import flutterApp from "../../assets/projects/flutterApp.png";
import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CustomZoomContent } from "./projectZommCustom";
import dictionaryApp from "../../assets/projects/dictionaryDesign.png";
import Carousel from "react-multi-carousel";
import workData from "../../assets/data/workData";
import { Skill } from "../../model/workObject";
import "react-multi-carousel/lib/styles.css";
// import "../carousel/carousel.css";

function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 768 },
    //   items: 4,
    //   slidesToSlide: 4,
    // },
    // mobile: {
    //   breakpoint: { max: 767, min: 464 },
    //   items: 2,
    //   slidesToSlide: 3,
    // },
  };
  const carouselSkills: Skill[] = workData.skills;

  const [toX, setAnimation] = useState(true);
  const handleAnimation = () => {
    setAnimation(!toX);
  };
  return (
    <>
      {/* <div className="projects flex flex-col flex-wrap gap-8 items-center justify-center text-center"> */}
      <div className="flex flex-col">
        <div className="parent ">
          <Carousel responsive={responsive}>
            {carouselSkills.map((skill, index) => {
              return (
                <div className="sliderProj" key={index}>
                  <Zoom>
                    <img src={skill.skillImageUrl} alt="movie" />
                  </Zoom>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="parent">
          <Carousel responsive={responsive}>
            {carouselSkills.map((skill, index) => {
              return (
                <div className="sliderProj" key={index}>
                  <img src={skill.skillImageUrl} alt="movie" />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Projects;
