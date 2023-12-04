import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
  if (!nowPlayingMovies) return;
  const mainMovie = nowPlayingMovies[1];
  const { original_title, overview } = mainMovie;
  console.log(mainMovie);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
