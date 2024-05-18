import { HomeIcon as Home } from "@heroicons/react/24/solid";
import { InboxIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Photo from "../photo/photo";
import iconLinkedin from "../../assets/icon-linkedin.png";
import iconLinkedinHover from "../../assets/icon-linkedin-hover.png";
import iconGithub from "../../assets/icno-github.png";
import iconGithubHover from "../../assets/icon-github-hover.png";

function NavabarMinimal() {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col font-medium p-10 gap-16 border-r-2 border-tertiary">
          <div>
            <a
              href=""
              className="hover:text-secondary hover:border-b-[3px] border-secondary"
            >
              <Home className="w-6 hover:text-secondary" title="Home" />
            </a>
          </div>
          <div>
            <a
              href=""
              className="hover:text-secondary hover:border-b-[3px] border-setext-secondary"
            >
              <EnvelopeIcon
                className="w-6 hover:text-secondary "
                title="Contact me"
              />
            </a>
          </div>
          <div>
            <a
              href=""
              className="hover:text-secondary hover:border-b-[3px] border-setext-secondary"
            >
              <InboxIcon
                className="w-6 hover:text-secondary "
                title="Projects"
              />
              {/* Source */}
            </a>
          </div>
          <div>
            <a
              href=""
              className="hover:text-secondary hover:border-b-[3px] border-secondary"
            >
              <UserCircleIcon
                className="w-6 hover:text-secondary "
                title="About me"
              />
            </a>
          </div>
        </div>
        <div>
          <Photo />
        </div>
        <div className="flex flex-col gap-16 p-10 border-l-2 border-tertiary">
          <div className="w-6 h-6"></div>
          <div className="group cursor-pointer">
            <img
              src={iconLinkedinHover}
              alt="LinkedIn"
              className="w-6 hidden group-hover:block"
            />
            <img
              src={iconLinkedin}
              alt="LinkedIn"
              className="w-6 group-hover:hidden"
            />
          </div>
          <div className="group cursor-pointer">
            <img
              src={iconGithubHover}
              alt="Github"
              className="w-6 hidden group-hover:block"
            />
            <img
              src={iconGithub}
              alt="Github"
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
