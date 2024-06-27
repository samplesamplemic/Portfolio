import Photo from "../../components/photo/photo";
import NavbarSmartphone from "../../components/smartphone/navbar/navbarSmartphone";
import "../../style/navbar.scss";

function Home() {
  return (
    <>
      <div className="h-full flex flex-col justify-center gap-8">
        <div className="center">
          <Photo />
        </div>
        <NavbarSmartphone />
      </div>
    </>
  );
}

export default Home;
