import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./projects..css";
import angularIcon from "../../assets/carousel/angular.webp";
import figmaIcon from "../../assets/carousel/figma.jpg";
import flutterIcon from "../../assets/carousel/flutter.jpg";
import htmlCssJsIcon from "../../assets/carousel/htmlCssJs.webp";
import kotlinIcon from "../../assets/carousel/kotlin.jpg";
import nodeIcon from "../../assets/carousel/node-logo.jpg";
import reactIcon from "../../assets/carousel/Reactlogo.jpg";
import springIcon from "../../assets/carousel/springJava.png";
import tailwindIcon from "../../assets/carousel/tailwindcss.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: angularIcon,
  },
  {
    url: figmaIcon,
  },
  {
    url: flutterIcon,
  },
  {
    url: htmlCssJsIcon,
  },
  {
    url: kotlinIcon,
  },
  {
    url: nodeIcon,
  },
  {
    url: reactIcon,
  },
  {
    url: springIcon,
  },
  {
    url: tailwindIcon,
  },
];
const Slider = () => {
  return (
    <div className="parent ">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 12s linear" //all/transform 15s work right
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
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
      <div className="text-tertiary float-end mt-1">
        Tech stack of my projects on Github
      </div>
    </div>
  );
};
export default Slider;
