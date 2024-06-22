import { NavbarItems } from "./navbar";
import { ProjectItems } from "./project";
import { WorkItems } from "./work";

export interface PortfolioObject {
  navbarItems: NavbarItems;
  workItems: WorkItems;
  projectsItems: ProjectItems;
}
