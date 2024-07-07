import { ReactElement } from "react";
import "../../style/navbar.scss";
import { mainClassname } from "../../style/tailwindClassname/main";
function Main(props: { childComponent: ReactElement }) {
  return (
    <>
      <main className={mainClassname.main}>
        {props.childComponent}
      </main>
    </>
  );
}

export default Main;
