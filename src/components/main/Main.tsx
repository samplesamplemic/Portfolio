import { ReactElement } from "react";
import "../../style/navbar.scss";
function Main(props: { childComponent: ReactElement }) {
  return (
    <>
      <main className="center w-[45%] min-w-[29rem] max-w-[33rem] py-16 gap-12 flex flex-col m-auto">
        {props.childComponent}
      </main>
    </>
  );
}

export default Main;
