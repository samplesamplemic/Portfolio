import Main from "../components/main/Main";
import MainHome from "../components/main/MainHome";
import Navbar from "../components/navbar/navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Main childComponent={<MainHome />} />
    </>
  );
}

export default Home;
