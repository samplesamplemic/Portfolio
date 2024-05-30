export interface WorkObject {
  workPositions: WorkPosition[];
  aboutMe: AboutMe;
  skills: Skill[];
}

export interface WorkPosition {
  workPosition: string;
  workTypology: string;
  workYear: string;
  workMonth: string;
  workDescription: string;
  workLink?: string;
}

export interface AboutMe {
  work: string;
  goalDescription: string;
}

export interface Skill {
  skillImageUrl: string;
}

export interface PortfolioObject {
  navbarItems: NavbarObject[];
}

export interface NavbarObject {
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  link: string;
  title: string;
}
