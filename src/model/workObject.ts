export interface WorkData {
  workPositions: WorkPosition[];
  aboutMe: AboutMe;
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
