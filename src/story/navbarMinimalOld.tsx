{
  /* <div>
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
          </div> */
}

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


/* .toX > :nth-child(1) {
  animation: toX1 0.33s linear forwards;
}
.toX > :nth-child(2) {
  animation: toX2 0.33s linear forwards;
}
.toX > :nth-child(3) {
  animation: toX2 0.33s linear forwards;
}
.toX > :nth-child(4) {
  animation: toX1 0.33s linear forwards;
}

.fromX > :nth-child(1) {
  animation: fromX1 0.33s linear forwards;
}
.fromX > :nth-child(2) {
  animation: fromX2 0.33s linear forwards;
}
.fromX > :nth-child(3) {
  animation: fromX2 0.33s linear forwards;
}
.fromX > :nth-child(4) {
  animation: fromX1 0.33s linear forwards;
}

@keyframes toX1 {
  0% {
    transform: skew(0deg);
  }
  100% {
    transform: skewY(45deg);
  }
}

@keyframes toX2 {
  0% {
    transform: skew(0deg);
  }
  100% {
    transform: skewY(-45deg);
  }
}

@keyframes fromX1 {
  0% {
    transform: skewY(45deg);
  }
  100% {
    transform: skew(0deg);
  }
}

@keyframes fromX2 {
  0% {
    transform: skewY(-45deg);
  }
  100% {
    transform: skew(0deg);
  }
}*/
