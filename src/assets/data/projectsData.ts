import { ProjectItems } from "../../model/workObject";
import flutterApp from "../projects/flutterApp.png";
import dictionaryApp from "../projects/dictionaryDesign.png";
import garageApp from "../projects/garage-API.png";
import garageApp1 from "../projects/garage-API2.png";
import garageApp2 from "../projects/garage-API3.png";
import garageApp3 from "../projects/garage-API4.png";
import garageApp4 from "../projects/garage-API5.png";

const projectData: ProjectItems = {
  projectItems: [
    {
      img: [flutterApp],
      title: "Flutter App",
      description: "Youtube ",
      githubSource: "",
    },
    {
      img: [dictionaryApp],
      title: "Kotlin App",
      description: "",
      githubSource: "",
    },
    {
      img: [garageApp, garageApp1, garageApp2, garageApp3, garageApp4],
      title: "Garage App",
      description: "",
      githubSource: "",
    },
    // {
    //   img: [],
    //   title: "",
    //   description: "",
    //   githubSource: "",
    // },
  ],
};

export default projectData;
