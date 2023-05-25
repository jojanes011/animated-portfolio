import React from "react";
import Chip from "../Main/Chip";
import ServicesIcon from "../../assets/icons/services.svg";
import ReactIcon from "../../assets/icons/react.svg";
import NextIcon from "../../assets/icons/nextjs.svg";
import NodeIcon from "../../assets/icons/nodejs.svg";
import AwsIcon from "../../assets/icons/aws.svg";
import AzureIcon from "../../assets/icons/azure.svg";
import FigmaIcon from "../../assets/icons/figma.svg";
import GitIcon from "../../assets/icons/git.svg";
import GraphqlIcon from "../../assets/icons/graphql.svg";
import PrismaIcon from "../../assets/icons/prisma.svg";
import TailwindIcon from "../../assets/icons/tailwindcss.svg";
import Image from "next/image";

const itemsSkills = [
  {
    name: "React JS",
    icon: ReactIcon,
  },
  {
    name: "Node JS",
    icon: NodeIcon,
  },
  {
    name: "Next JS",
    icon: NextIcon,
  },
  {
    name: "AWS",
    icon: AwsIcon,
  },
  {
    name: "Azure",
    icon: AzureIcon,
  },
  {
    name: "TailwindCSS",
    icon: TailwindIcon,
  },
  {
    name: "Figma",
    icon: FigmaIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
  {
    name: "GraphQL",
    icon: GraphqlIcon,
  },
  {
    name: "Prisma ORM",
    icon: PrismaIcon,
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col space-y-8 my-32">
      <Chip icon={ServicesIcon} name="Skills" />
      <h3 className="text-4xl leading-normal">
        My
        <span className="text-green"> Advantages</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-start">
        {itemsSkills.map((skill) => (
          <SkillElement key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

const SkillElement = ({ icon = "", name = "" }) => (
  <div className="border hover:border-green border-border rounded-full w-36 py-12 flex flex-col space-y-2 items-center">
    <Image alt={name} src={icon} width={80} height={80} />
    <span className="text-xs">{name}</span>
  </div>
);

export default Skills;
