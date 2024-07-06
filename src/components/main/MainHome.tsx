import "../../style/navbar.scss";
import Work from "../aboutMe/aboutMe";
import Slider from "../carousel/carousel";
import Photo from "../photo/photo";
function MainHome() {
  return (
    <>
      <Slider />
      <Photo />
      <Work />
    </>
  );
}

export default MainHome;
