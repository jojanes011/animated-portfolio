import React from "react";
import Chip from "../Main/Chip";
import UserIcon from "../../assets/icons/user.svg";

const About = () => {
  return (
    <div className="flex flex-col space-y-8 my-32">
      <Chip icon={UserIcon} name="ABOUT" />
      <h3 className="text-4xl leading-normal">
        Every great design begin with an even{" "}
        <span className="text-green">better story</span>
      </h3>
      <p className="text-subtitle text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos nam
        modi tempore consequatur commodi, ratione saepe? Provident officia minus
        blanditiis molestiae accusantium at labore nostrum similique? Nobis,
        aspernatur. Aliquid?
      </p>
    </div>
  );
};

export default About;
