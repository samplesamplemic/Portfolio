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
    items: 3,
    slidesToSlide: 3,
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
    <article
      aria-label="Image Carousel"
      className="carousel"
    >
      <Carousel
        responsive={responsive}
        centerMode={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 2s linear" //"all 10s linear" //all/transform 15s work right
        draggable={true}
        partialVisible={false}
        showDots={true}
        // transitionDuration={12000}
        // swipeable={true}
        // infinite={true}
        // arrows={false}
        // dotListClass="custom-dot-list-style"
      >
        {carouselSkills.map((skill, index) => {
          return (
            <figure
              className={carouselClassname.figure}
              key={index}
            >
              <img
                src={skill.skillImageUrl}
                alt="movie"
                className={carouselClassname.img}
              />
            </figure>
          );
        })}
      </Carousel>
      <small className={carouselClassname.small}>
        Tech stack
      </small>
    </article>
  );
};
export default Slider;
