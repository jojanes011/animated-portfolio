import Image from "next/image";

const Chip = ({ icon = "", name = "" }) => (
  <div className="flex flex-row space-x-2 py-2 px-4 w-max border items-center border-border rounded-full text-xs">
    <Image src={icon} alt={name} width={16} height={16} />
    <div>{name}</div>
  </div>
);

export default Chip;
