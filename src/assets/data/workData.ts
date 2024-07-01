import angularIcon from "../../assets/carousel/angular.webp";
import figmaIcon from "../../assets/carousel/figma.jpg";
import flutterIcon from "../../assets/carousel/flutter.jpg";
import htmlCssJsIcon from "../../assets/carousel/htmlCssJs.webp";
import kotlinIcon from "../../assets/carousel/kotlin.jpg";
import nodeIcon from "../../assets/carousel/node-logo.jpg";
import reactIcon from "../../assets/carousel/Reactlogo.jpg";
import springIcon from "../../assets/carousel/springJava.png";
import tailwindIcon from "../../assets/carousel/tailwindcss.png";
import sqlIcon from "../../assets/carousel/SQL.jpg";
import agileIcon from "../../assets/carousel/agile.png";
import photo from "../icons/logo_dragon_youtube.png";
import { WorkItems } from "../../model/work";

const workData: WorkItems = {
  workitems: {
    workPositions: [
      {
        workPosition: "Capgemini - Analyst Consultant",
        workTypology: "Apprenticeship",
        workYear: "2022",
        workMonth: "Nov - Now",
        workDescription:
          "Full-Stack development using agile methodology.",
      },
      {
        workPosition: "Full-Stack Developer",
        workTypology: "Develhope Academy",
        workYear: "2022",
        workMonth: "Apr - Nov",
        workDescription:
          "Web application development using agile methodology. Horizontal tutoring for other students of Full-Stack Web Developer courses.",
        workLink: "https://www.develhope.co/",
      },
      {
        workPosition: "Information Technology Assistant",
        workTypology: "WIT Informatica · Stage",
        workYear: "2021",
        workMonth: "Nov - Mar",
        workDescription:
          "Consultancy to partner companies for software and hardware solutions.",
      },
    ],
    aboutMe: {
      work: "Jr. Software Developer",
      goalDescription:
        "From humanities studies to the IT sector, I have defined a great passion for building digital services and infrastructures. I'm looking for personal realization and professional development.",
      name: "Michele La Torre",
      profession: "Full-Stack Developer",
      photo: photo,
    },
    skills: [
      {
        skillImageUrl: angularIcon,
      },
      {
        skillImageUrl: agileIcon,
      },
      {
        skillImageUrl: sqlIcon,
      },
      {
        skillImageUrl: figmaIcon,
      },
      {
        skillImageUrl: flutterIcon,
      },
      {
        skillImageUrl: htmlCssJsIcon,
      },
      {
        skillImageUrl: kotlinIcon,
      },
      {
        skillImageUrl: nodeIcon,
      },
      {
        skillImageUrl: reactIcon,
      },
      {
        skillImageUrl: springIcon,
      },
      {
        skillImageUrl: tailwindIcon,
      },
    ],
  },
};

export default workData;
