import "../../style/navbar.scss";
import Work from "../aboutMe/aboutMe";
import Slider from "../carousel/carousel";
import Photo from "../photo/photo";
import Social from "../social/Social";
function Main() {
  return (
    <>
      <main className="center w-[45%] p-16 gap-12 flex flex-col m-auto">
        <Slider />
        <Photo />
        <Work />
        {/* <Social /> */}
      </main>
    </>
  );
}

export default Main;
