import React from "react";
import Chip from "../Main/Chip";
import ProjectsIcon from "../../assets/icons/projects.svg";
import DeveloperImage from "../../assets/images/developer.svg";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex flex-col space-y-8 my-32">
      <Chip icon={ProjectsIcon} name="Projects" />
      <h3 className="text-4xl leading-normal">
        Featured
        <span className="text-green"> Projects</span>
      </h3>
      <CardProject />
    </div>
  );
};

const CardProject = () => (
  <div className="flex flex-col relative">
    <div className="rounded-3xl shadow-lg">
      <Image src={DeveloperImage} alt="Developer" className="bg-black" />
      <div className="absolute flex flex-row space-x-4 bottom-8 left-8">
        <div className="rounded-full py-2 px-4 bg-black w-auto drop-shadow">
            <span className="text-sm">Next JS</span>
        </div>
        <div className="rounded-full py-2 px-4 bg-black w-auto drop-shadow">
            <span className="text-sm">Prisma ORM</span>
        </div>
        <div className="rounded-full py-2 px-4 bg-black w-auto drop-shadow">
            <span className="text-sm">TailwindCSS</span>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
