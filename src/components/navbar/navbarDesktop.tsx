import iconLinkedin from "../../assets/icon-linkedin.png";
import iconLinkedinHover from "../../assets/icon-linkedin-hover.png";
import iconGithub from "../../assets/icno-github.png";
import iconGithubHover from "../../assets/icon-github-hover.png";

function NavbarDesktop() {
  return (
    <>
      <div className="hidden md:flex justify-between h-14 bg-navbarBG backdrop-blur-sm bg-opacity-15 shadow-lg">
        <div className="flex font-medium ml-10 gap-8 items-center">
          <div className="">
            <a
              href=""
              className="hover:text-secondary hover:border-b-[3px] border-secondary"
            >
              Home
            </a>
          </div>
          <div>
            <a
              href=""
              className="hover:text-secondary hover:border-b-[3px] border-setext-secondary"
            >
              Contact me
            </a>
          </div>
          <div>
            <a
              href=""
              className="hover:text-secondary hover:border-b-[3px] border-setext-secondary"
            >
              Source
            </a>
          </div>
          <div>
            <a
              href=""
              className="hover:text-secondary hover:border-b-[3px] border-secondary"
            >
              Posts
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 mr-10">
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
        </div>
      </div>
    </>
  );
}

export default NavbarDesktop;
