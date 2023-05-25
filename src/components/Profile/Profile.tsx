import Image from "next/image";
import React from "react";
import ImgProfile from "@/assets/images/Perfil-min.png";
import GithubIcon from "../../assets/icons/github.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import CVIcon from "../../assets/icons/cv.png";

const Profile = () => {
  return (
    <div className="flex w-full sm:w-80 flex-col justify-center">
      <div className="static sm:fixed sm:top-8 sm:left-8 w-full sm:w-80 flex flex-col shadow shadow-border p-8 rounded-2xl space-y-6 border border-border text-center">
        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold text-3xl">Joan</div>
          <div className="text-xs">Front-End Developer</div>
        </div>
        <div className="rounded-2xl bg-green">
          <Image
            className="rounded-2xl h-52"
            src={ImgProfile}
            alt="Perfil de Joan"
          />
        </div>
        <div className="text-center">
          <span>jojanes011@gmail.com</span>
          <br />
          <span>Cali, Colombia</span>
        </div>
        <div className="text-xs text-subtitle">
          © 2023 Joan. All Rights Reserved
        </div>
        <div className="flex flex-row justify-center space-x-4">
          {icons.map((element, index) => (
            <Icon key={index} name={element.name} icon={element.icon} />
          ))}
        </div>
        <button className="rounded-full p-3 w-full bg-green text-black font-bold">
          HIRE ME!
        </button>
      </div>
    </div>
  );
};

const icons = [
  {
    name: "Icono de linkedin",
    icon: LinkedinIcon,
  },
  {
    name: "Icono de github",
    icon: GithubIcon,
  },
  {
    name: "Icono de cv",
    icon: CVIcon,
  },
];

const Icon = ({ name = "", icon = "" }) => (
  <div className="flex flex-row justify-center items-center p-3 rounded-full border border-[#8d8d8d]">
    <Image src={icon} alt={name} width={20} height={20} />
  </div>
);

export default Profile;
