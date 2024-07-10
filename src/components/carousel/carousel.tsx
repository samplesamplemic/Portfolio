import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../style/carousel.scss";
import { Skill } from "../../model/work";
import workData from "../../assets/data/workData";
import { carouselClassname } from "../../style/tailwindClassname/carousel";

const carouselSkills: Skill[] = workData.workitems.skills;
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
    breakpoint: { max: 767, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        centerMode={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 2s linear" //"all 10s linear" //all/transform 15s work right
        // transitionDuration={12000}
        // swipeable={true}
        draggable={true}
        // infinite={true}
        partialVisible={false}
        // arrows={false}
        showDots={true}
        // dotListClass="custom-dot-list-style"
      >
        {carouselSkills.map((skill, index) => {
          return (
            <div
              className="slider"
              key={index}
            >
              <img
                src={skill.skillImageUrl}
                alt="movie"
                className="shadow-[rgba(0,0,15,0.5)_3px_3px_3px_2px]"
              />
            </div>
          );
        })}
      </Carousel>
      <div className={carouselClassname.info}>
        {/* Tech stack of my projects on Github */}
      </div>
    </div>
  );
};
export default Slider;
