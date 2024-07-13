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
      subTitle: "Spring Rest API",
      description:
        "case study to learn more the OOP, pattern and testing.",
      githubSource:
        "https://github.com/samplesamplemic/Garage-API",
    },
    {
      img: [flutterApp],
      title: "Flutter App",
      subTitle: "Basic Video Platform",
      description: "a simple video player, using youtube api.",
      githubSource:
        "https://github.com/samplesamplemic/Yotube_simil",
      state: "in progress",
    },
    {
      img: [dictionaryApp],
      title: "Kotlin App",
      subTitle: "Dictionary",
      description:
        "using a free dictionary api and a web-screaper to retrieve an image of the searched word.",
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
