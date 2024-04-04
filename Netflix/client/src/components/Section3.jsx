import React from "react";
import Devices from "../assets/Devices.png";

const Section3 = () => {
  return (
    <div className="w-[100%] h-[600px] bg-black p-5 flex flex-col items-center justify-center lg:flex-row lg:px-40 xl:px-60 gap-5 2xl:px-80">
      <div className="flex flex-col gap-5 lg:flex-1">
        <h1 className="text-white text-3xl font-bold text-center lg:text-5xl lg:text-start">
          Watch everywhere
        </h1>
        <h1 className="text-white text-xl text-center lg:text-2xl lg:text-start">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </h1>
      </div>
      <div className="relative flex justify-center lg:flex-1">
        <img
          src={Devices}
          alt="Devices-Image"
          className="w-[400px] h-auto z-10 xl:w-[800px]"
        />
        <video
          autoPlay
          playsInline
          muted
          loop
          className="absolute top-[40px] w-[60%] xl:top-[55px]"
        >
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Section3;
