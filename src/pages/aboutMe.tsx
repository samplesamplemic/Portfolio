import Work from "../components/aboutMe/aboutMe";
import MultiPage from "../components/navbar/multiPage";
import Navbar from "../components/navbar/navbar";

function AboutMe() {
  return (
    <>
      <div className="flex flex-col h-full items-center">
        <MultiPage />
        <Navbar childComponent={<Work />} />
      </div>
    </>
  );
}

export default AboutMe;
