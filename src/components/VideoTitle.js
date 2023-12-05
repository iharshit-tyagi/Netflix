import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-7 pt-[17%] w-screen  aspect-video bg-gradient-to-r from-black absolute">
      <h1 className=" text-4xl font-bold w-2/5 text-white">{title}</h1>
      <p className="py-6 text-lg w-2/5 text-white">{overview}</p>
      <div className="flex justify-start gap-3  w-2/5">
        <button className=" bg-white text-black px-9 rounded-md text-lg  py-2 bg-opacity-40 hover:bg-opacity-50">
          ▶ Play
        </button>
        <button className=" bg-gray-600 text-white  px-9 rounded-md text-lg  py-2 bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
