import { Linkedin, Youtube, Github } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

type Props = {};

const SideSocialIcons = (props: Props) => {
  return (
    <div className="fixed flex h-full flex-col items-center justify-end gap-4 px-2">
      <Link href="https://www.linkedin.com/in/abubakar-athman">
        <Linkedin
          className="hover:cursor-pointer hover:text-[#0A66C2]"
          size={23}
        />
      </Link>
      <Link href="https://twitter.com/iathman83">
        <BsTwitterX
          className="hover:cursor-pointer hover:text-black"
          size={20}
        />
      </Link>
      <Link href="https://www.youtube.com/@programwithabu">
        <Youtube
          className="hover:cursor-pointer hover:text-[#FF0000]"
          size={23}
        />
      </Link>
      <Link href="https://github.com/iAthman83">
        <Github className="hover:cursor-pointer hover:text-black" size={23} />
      </Link>
      <div className="mt-4 h-2/5 border-l-2 border-l-primary-foreground"></div>
    </div>
  );
};

export default SideSocialIcons;
