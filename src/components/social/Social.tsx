import "../../style/navbar.scss";
import { navbarClassname } from "../../style/tailwindClassname/navbar";
import {
  GithubSvg,
  InstagramSvg,
  LinkedInSvg,
} from "../svg/Svg";

function Social() {
  return (
    <>
      <div>
        <div className={navbarClassname.socialIcons}>
          <div className="group cursor-pointer p-1">
            <InstagramSvg />
          </div>
          <div className="group cursor-pointer p-1">
            <GithubSvg />
          </div>
          <div className="group cursor-pointer p-1">
            <LinkedInSvg />
          </div>
        </div>
      </div>
    </>
  );
}

export default Social;
