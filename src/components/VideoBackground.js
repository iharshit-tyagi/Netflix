import React from "react";
import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";
const VideoBackground = ({ id }) => {
  //fetch trailer data and update the store
  useTrailer(id);
  const movie = useSelector((store) => store.movie);
  const { key } = movie?.trailer;
  return (
    <div className=" ">
      <iframe
        className="w-screen aspect-video   "
        src={"https://www.youtube.com/embed/" + key + "?&autoplay=1&mute=1"}
        title="Youtube Video Player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
