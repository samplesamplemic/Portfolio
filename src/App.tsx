import NavabarMinimal from "./components/navbar/navbarMinimal";
import NavbarSmartphone from "./components/navbar/navbarSmartphone";
import Photo from "./components/photo/photo";
import "./index.css";

function App() {
  return (
    <>
      {/* <NavbarDesktop /> */}
      <div className="flex h-full items-center">
        <NavabarMinimal />
        {/* <Photo /> */}
        {/* <Work /> */}
        <NavbarSmartphone />
      </div>
    </>
  );
}

export default App;
