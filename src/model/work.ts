export interface WorkItems {
  workitems: WorkObject;
}

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
