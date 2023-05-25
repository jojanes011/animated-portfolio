import Image from "next/image";
import HomeIcon from "../../assets/icons/home.svg";
import UserIcon from "../../assets/icons/user.svg";
import ResumeIcon from "../../assets/icons/resume.svg";
import ServicesIcon from "../../assets/icons/services.svg";
import SkillsIcon from "../../assets/icons/skills.svg";
import ProjectsIcon from "../../assets/icons/projects.svg";
import MessageIcon from "../../assets/icons/message.svg";

const Menu = () => {
  return (
    <div className="flex order-first sm:order-last">
      <div className="fixed mr-8 top-1/2 transform -translate-y-1/2 right-0 flex flex-col space-y-1 border justify-center py-2 px-1 border-border rounded-full h-min">
        <div className="hover:bg-border p-2 rounded-full cursor-pointer">
          <Image src={HomeIcon} width={16} height={16} alt="Home Icono" />
        </div>
        <div className="hover:bg-border p-2 rounded-full cursor-pointer">
          <Image src={UserIcon} width={16} height={16} alt="User Icono" />
        </div>
        <div className="hover:bg-border p-2 rounded-full cursor-pointer">
          <Image src={ResumeIcon} width={16} height={16} alt="Resume Icono" />
        </div>
        <div className="hover:bg-border p-2 rounded-full cursor-pointer">
          <Image
            src={ServicesIcon}
            width={16}
            height={16}
            alt="Services Icono"
          />
        </div>
        <div className="hover:bg-border p-2 rounded-full cursor-pointer">
          <Image src={SkillsIcon} width={16} height={16} alt="Skills Icono" />
        </div>
        <div className="hover:bg-border p-2 rounded-full cursor-pointer">
          <Image
            src={ProjectsIcon}
            width={16}
            height={16}
            alt="Projects Icono"
          />
        </div>
        <div className="hover:bg-border p-2 rounded-full cursor-pointer">
          <Image src={MessageIcon} width={16} height={16} alt="Message Icono" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
