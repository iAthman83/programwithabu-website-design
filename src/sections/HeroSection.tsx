import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="padding-x-axis">
      <div className="flex h-[35rem] flex-col rounded-md bg-primary lg:h-96 lg:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Abu Athman
              </h1>
              <p className="mx-auto max-w-[700px] text-background md:text-xl ">
                Software engineer, frontend and mobile app.
              </p>
            </div>
            <div className="space-x-4">
              <Button variant="background" className="">
                Work with me
              </Button>
              <Button variant="outline" className="bg-primary">
                YouTube
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-end pr-12 text-center lg:justify-center">
          <Image
            src="/profile.webp"
            alt="hero image"
            height={400}
            width={400}
            className="hidden lg:inline"
          />
          <Image
            src="/profile.webp"
            alt="hero image"
            height={400}
            width={400}
            className="mx-auto ml-6 flex lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
