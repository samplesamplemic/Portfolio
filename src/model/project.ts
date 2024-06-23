export interface ProjectItems {
  projectItems: ProjectObject[];
}

export interface ProjectObject {
  img: string[];
  title: string;
  description: string;
  state: string;
  githubSource: string;
}
