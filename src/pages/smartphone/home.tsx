import Photo from "../../components/photo/photo";
import NavbarSmartphone from "../../components/smartphone/navbar/navbarSmartphone";

function Home() {
  return (
    <>
      <div className="h-full flex flex-col justify-evenly">
        <Photo />
        <NavbarSmartphone />
      </div>
    </>
  );
}

export default Home;
