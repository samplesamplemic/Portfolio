import { Link } from "react-router-dom";
import { HomeIcon as Home } from "@heroicons/react/24/solid";
import { InboxIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import "./navbar.css";
import iconLinkedin from "../../assets/icon-linkedin.png";
import iconLinkedinHover from "../../assets/icon-linkedin-hover.png";
import iconGithub from "../../assets/icno-github.png";
import iconGithubHover from "../../assets/icon-github-hover.png";
import { ReactElement } from "react";

function NavabarMinimal(props: { childComponent: ReactElement }) {
  return (
    <>
      <div className="w-full flex flex-1 justify-between items-center">
        <div className="flex flex-col font-medium p-10 gap-16 border-r-2 border-tertiary">
          <div>
            <Link
              to="/"
              className="homeLink hover:text-secondary hover:border-b-[3px] border-secondary"
            >
              <Home className="w-6 hover:text-secondary" title="Home" />
            </Link>
          </div>
          <div>
            <Link
              to="/aboutMe"
              className="hover:text-secondary hover:border-b-[3px] border-secondary"
            >
              <UserCircleIcon
                className="w-6 hover:text-secondary "
                title="About me"
              />
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="hover:text-secondary hover:border-b-[3px] border-setext-secondary"
            >
              <InboxIcon
                className="w-6 hover:text-secondary "
                title="Projects"
              />
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="hover:text-secondary hover:border-b-[3px] border-secondary"
            >
              <EnvelopeIcon
                className="w-6 hover:text-secondary "
                title="Contact me"
              />
            </Link>
          </div>
        </div>
        {/* <div>
          <Photo />
        </div> */}
        <div className="center">{props.childComponent}</div>
        <div className="flex flex-col gap-16 p-10 border-l-2 border-tertiary">
          <div className="w-6 h-6"></div>
          <div className="group cursor-pointer">
            <img
              src={iconLinkedinHover}
              alt="LinkedIn"
              title="Linkedln"
              className="w-6 hidden group-hover:block"
            />
            <img
              src={iconLinkedin}
              alt="LinkedIn"
              title="Linkedln"
              className="w-6 group-hover:hidden"
            />
          </div>
          <div className="group cursor-pointer">
            <img
              src={iconGithubHover}
              alt="Github"
              title="Source"
              className="w-6 hidden group-hover:block"
            />
            <img
              src={iconGithub}
              alt="Github"
              title="Source"
              className="w-6 group-hover:hidden"
            />
          </div>
          <div className="w-6 h-6"></div>
        </div>
      </div>
    </>
  );
}

export default NavabarMinimal;
