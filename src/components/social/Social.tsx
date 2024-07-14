import "../../style/navbar.scss";
import { socialClassname } from "../../style/tailwindClassname/social";
import {
  GithubSvg,
  InstagramSvg,
  LinkedInSvg,
} from "../svg/Svg";

function Social() {
  return (
    <>
      <span className={socialClassname.main}>
        <div className={socialClassname.group}>
          <InstagramSvg />
        </div>
        <div className={socialClassname.group}>
          <GithubSvg link="https://github.com/samplesamplemic" />
        </div>
        <div className={socialClassname.group}>
          <LinkedInSvg />
        </div>
      </span>
    </>
  );
}

export default Social;
