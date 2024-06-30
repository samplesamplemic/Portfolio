import "../../style/navbar.scss";
import { ReactElement } from "react";
function Navbar(props: { childComponent: ReactElement }) {
  return (
    <>
      <main className="">{props.childComponent}</main>
    </>
  );
}

export default Navbar;
