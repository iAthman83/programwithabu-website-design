import React from "react";

type Props = {};

const MyWorkSection = (props: Props) => {
  return (
    <section className="padding-x-axis flex flex-col items-center justify-center space-y-[50px]">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
        My Work
      </h1>
      <div className="flex items-center justify-center">
        <p className="text-center">
          Deployed scalable travel, event and telemedicine web and hybrid mobile
          apps using React SPA and PWA. Collaborated in 140+ projects with 50+
          clients all around the world. I am also interested in data analytics
          and visualization.
        </p>
      </div>
    </section>
  );
};

export default MyWorkSection;
