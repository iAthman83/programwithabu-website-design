import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Computer, Smartphone } from "lucide-react";
import { FaReact } from "react-icons/fa";
import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";

type Props = {};

const ExpertiseSection = (props: Props) => {
  return (
    <div className="padding-x-axis relative flex h-[60rem] w-full flex-col items-center justify-center space-y-[50px] bg-background bg-dot-white/[0.2] lg:h-[35rem]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
        My Expertise
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center space-x-0 space-y-4 lg:space-x-4 lg:space-y-0">
        <SoftwareEngineer />
        <FrontEnd />
        <Mobile />
      </div>
    </div>
  );
};

export default ExpertiseSection;

const SoftwareEngineer = (props: Props) => {
  return (
    <Card className="w-[300px] border-b-4 border-r-4 border-b-[#8E44AD] border-r-[#8E44AD] bg-background xl:w-[350px]">
      <CardHeader className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md p-4">
          <HiOutlineComputerDesktop size={40} className="text-foreground" />
          <div className="flex-1 space-y-1">
            <p className="text-xl font-semibold uppercase leading-none text-foreground">
              Software
            </p>
            <p className="text-xl font-semibold uppercase leading-none text-[#8E44AD]">
              Engineer
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 rounded-md px-4">
          <CardDescription className="text-foreground">
            Proficient in both object-oriented and functional programming
            paradigms, with expertise in JavaScript, and TypeScript.
          </CardDescription>
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

const FrontEnd = (props: Props) => {
  return (
    <Card className="w-[300px] border-b-4 border-r-4 border-b-primary border-r-primary bg-background xl:w-[350px]">
      <CardHeader className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md p-4">
          <FaReact size={40} className="text-foreground" />
          <div className="flex-1 space-y-1">
            <p className="text-xl font-semibold uppercase leading-none text-foreground">
              Frontend dev
            </p>
            <p className="text-xl font-semibold uppercase leading-none text-primary">
              React, NextJS
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 rounded-md px-4">
          <CardDescription className="text-foreground">
            Passionate about UI/UX design. Over 5 years of experience in HTML,
            CSS, JS, as well as React and NextJS frameworks.
          </CardDescription>
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

const Mobile = (props: Props) => {
  return (
    <Card className="w-[300px] border-b-4 border-r-4 border-b-[#2980B9] border-r-[#2980B9] bg-background xl:w-[350px]">
      <CardHeader className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md p-4">
          <HiOutlineDevicePhoneMobile size={40} className="text-foreground" />
          <div className="flex-1 space-y-1">
            <p className="text-xl font-semibold uppercase leading-none text-foreground">
              Mobile dev
            </p>
            <p className="text-xl font-semibold uppercase leading-none text-[#2980B9]">
              React Native
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 rounded-md px-4">
          <CardDescription className="text-foreground">
            Experienced in crafting hybrid mobile applications and
            cross-platform solutions using the Flutter framework.
          </CardDescription>
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};
