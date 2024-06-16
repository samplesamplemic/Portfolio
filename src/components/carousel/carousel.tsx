import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";
import { Skill } from "../../model/dataInterfaces";
import workData from "../../assets/data/workData";

const carouselSkills: Skill[] = workData.skills;
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1200, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 3,
  },
};

const Slider = () => {
  return (
    <div className="parent ">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 10s linear" //all/transform 15s work right
        transitionDuration={12000}
        // rewindWithAnimation={true}
        swipeable={true}
        draggable={true}
        // centerMode={true}
        infinite={true}
        partialVisible={false}
        arrows={false}
        // showDots={true}
        // dotListClass="custom-dot-list-style"
      >
        {carouselSkills.map((skill, index) => {
          return (
            <div className="slider" key={index}>
              <img src={skill.skillImageUrl} alt="movie" />
            </div>
          );
        })}
      </Carousel>
      <div className="text-tertiary font-semibold float-end mt-1">
        Tech stack of my projects on Github
      </div>
    </div>
  );
};
export default Slider;
