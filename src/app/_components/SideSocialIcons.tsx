import { Linkedin, Youtube, Github } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

type Props = {};

const SideSocialIcons = (props: Props) => {
  return (
    <div className="fixed flex h-full flex-col items-center justify-end gap-4 px-2">
      <Linkedin size={23} />
      <Youtube size={23} />
      <BsTwitterX size={20} />
      <Github size={23} />
      <div className="mt-4 h-2/5 border-l-2 border-l-primary-foreground"></div>
    </div>
  );
};

export default SideSocialIcons;
