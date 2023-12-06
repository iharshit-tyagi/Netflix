import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
  if (!nowPlayingMovies) return;
  const mainMovie = nowPlayingMovies[11];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="overflow-hidden">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
