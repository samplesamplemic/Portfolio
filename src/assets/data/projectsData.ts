import { ProjectItems } from "../../model/project";
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
      img: [
        garageApp,
        garageApp1,
        garageApp2,
        garageApp3,
        garageApp4,
      ],
      title: "Garage API",
      description: "Spring Rest API",
      githubSource:
        "https://github.com/samplesamplemic/Garage-API",
    },
    {
      img: [flutterApp],
      title: "Flutter App",
      description: "Basic Video Platform",
      githubSource:
        "https://github.com/samplesamplemic/Yotube_simil",
      state: "in progress",
    },
    {
      img: [dictionaryApp],
      title: "Kotlin App",
      description: "Dictionary",
      githubSource:
        "https://github.com/samplesamplemic/Dictionary_2.0",
      state: "in progress",
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
