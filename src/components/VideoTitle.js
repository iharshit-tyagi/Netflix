import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pl-8 pt-[17%] w-full aspect-video absolute ">
      <h1 className="text-lg md:text-4xl font-bold w-2/5 text-white">
        {title}
      </h1>
      <p className="hidden md:block py-6 text-lg w-2/5 text-white">
        {overview}
      </p>
      <div className="mt-4 md:mt-0 flex justify-start gap-3 w-2/3  md:w-2/5">
        <button className="  bg-white text-black px-5 md:px-9 rounded-md text-sm md:text-lg py-1 md:py-2 bg-opacity-40 hover:bg-opacity-50">
          ▶ Play
        </button>
        <button className=" bg-gray-600 text-white  px-5 md:px-9 rounded-md text-base md:text-lg  py-1 md:py-2 hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
