import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-8">
      <h1 className=" text-6xl text-blue-600 font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/5">{overview}</p>
      <div className="flex justify-start gap-3  w-2/5">
        <button className=" bg-gray-400 text-black px-9 rounded-md text-lg  py-2 bg-opacity-40">
          ▶ Play
        </button>
        <button className=" bg-gray-400 text-black  px-9 rounded-md text-lg  py-2 bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
