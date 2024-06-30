import Work from "../components/aboutMe/aboutMe";
import Slider from "../components/carousel/carousel";
import MultiPage from "../components/navbar/multiPage";
import Navbar from "../components/navbar/navbar";
// import NavbarSmartphone from "../components/navbar/navbarSmartphone";
import Photo from "../components/photo/photo";

function Home() {
  return (
    <>
      {/* <div className="flex flex-col items-center"> */}
      <Navbar />
      <main className="center w-[45%] pt-20 gap-12 flex flex-col m-auto">
        <Slider />
        <Photo />
        <Work />
      </main>
      {/* <NavbarSmartphone /> */}
      {/* </div> */}
    </>
  );
}

export default Home;
