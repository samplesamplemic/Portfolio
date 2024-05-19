import MultiPage from "../components/navbar/multiPage";
import NavabarMinimal from "../components/navbar/navbarMinimal";
import NavbarSmartphone from "../components/navbar/navbarSmartphone";
import Photo from "../components/photo/photo";
import "../index.css";

function Home() {
  return (
    <>
      {/* <NavbarDesktop /> */}
      <div className="flex flex-col h-full items-center">
        <MultiPage />
        <NavabarMinimal childComponent={<Photo />} />
        {/* <Photo /> */}
        {/* <Work /> */}
        <NavbarSmartphone />
      </div>
    </>
  );
}

export default Home;
