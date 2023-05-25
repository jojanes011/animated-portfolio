import Image from "next/image";
import React from "react";
import HomeIcon from "../../assets/icons/home.svg";
import ProjectsImage from "../../assets/images/my-projects.png";
import Chip from "./Chip";
import Experience from "./Experience";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Testimonial from "../Testimonial/Testimonial";

const Main = () => {
  return (
    <div className="flex-1 flex-col items-start">
      <Chip icon={HomeIcon} name="INTRODUCE" />
      <h1 className="my-8 text-6xl leading-normal">
        Say Hi from <span className="text-green">Joan</span>,
        <br /> Front-End Developer
      </h1>
      <h4 className="text-subtitle">
        I design and code beutifully simple thigs and i love what i do.
        <br />
        Just simple like that!
      </h4>
      <Image
        className="animate-pulse my-8 ml-auto"
        src={ProjectsImage}
        width={150}
        height={150}
        alt="My Projects"
      />
      <Experience />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Testimonial />
    </div>
  );
};

export default Main;
