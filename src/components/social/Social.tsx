import "../../style/navbar.scss";
import { socialClassname } from "../../style/tailwindClassname/social";
import { GithubSvg, LinkedInSvg } from "../svg/Svg";

function Social() {
  return (
    <>
      <span className={socialClassname.main}>
        <div className={socialClassname.group}>
          <GithubSvg link="https://github.com/samplesamplemic" />
        </div>
        <div className={socialClassname.group}>
          <LinkedInSvg
            link={
              "https://www.linkedin.com/in/michele-la-torre-a8990b235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgJPSISRmTV6NwCJoTDWNNw%3D%3D"
            }
          />
        </div>
        {/* <div className={socialClassname.group}>
          <InstagramSvg link={"https://www.instagram.com/mic_la_torre/"} />
        </div> */}
      </span>
    </>
  );
}

export default Social;
