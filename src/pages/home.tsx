import MultiPage from "../components/navbar/multiPage";
import NavbarMinimal from "../components/navbar/navbarMinimal";
import NavbarSmartphone from "../components/navbar/navbarSmartphone";
import Photo from "../components/photo/photo";
import "../index.css";

function Home() {
  return (
    <>
      <div className="flex flex-col h-full items-center">
        <MultiPage />
        <NavbarMinimal childComponent={<Photo />} />
        <NavbarSmartphone />
      </div>
    </>
  );
}

export default Home;
