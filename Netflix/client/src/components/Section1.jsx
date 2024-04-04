import React from "react";
import TV from "../assets/TV.png";

const Section1 = () => {
  return (
    <div className="w-[100%] h-[600px] bg-black p-5 flex flex-col items-center justify-center lg:flex-row lg:px-40 xl:px-60 gap-5 2xl:px-80">
      <div className="flex flex-col gap-5 lg:flex-1">
        <h1 className="text-white text-3xl font-bold text-center lg:text-5xl lg:text-start">
          Enjoy on your TV
        </h1>
        <h1 className="text-white text-xl text-center lg:text-2xl lg:text-start">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </h1>
      </div>
      <div className="relative flex justify-center overflow-auto lg:flex-1">
        <img src={TV} alt="TV-Image" className="w-[500px] z-10 xl:w-[800px]" />
        <video
          autoPlay
          playsInline
          muted
          loop
          className="absolute top-[60px] w-[400px] xl:w-[500px] xl:top-[70px]"
        >
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Section1;
