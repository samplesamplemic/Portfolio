import Main from "../../components/main/Main";
import MainHome from "../../components/main/MainHome";
import NavbarSmartphone from "../../components/smartphone/navbar/navbarSmartphone";
import "../../style/navbar.scss";

function Home() {
  return (
    <>
      <Main childComponent={<MainHome />} />
      <NavbarSmartphone />
    </>
  );
}

export default Home;
