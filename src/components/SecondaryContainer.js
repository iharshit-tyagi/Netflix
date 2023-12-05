import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className=" bg-black w-screen overflow-hidden">
      {/* This will have multiple movie lists with n movie cards */}
      <MoviesList title={"Now Playing "} movies={movies?.nowPlayingMovies} />
      <MoviesList title={"Popular "} movies={movies?.popularMovies} />
      <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />
      <MoviesList title={"Trending"} movies={movies?.trendingMovies} />
    </div>
  );
};

export default SecondaryContainer;
