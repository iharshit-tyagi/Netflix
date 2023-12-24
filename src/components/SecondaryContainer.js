import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className=" bg-black w-full box-border">
      <div className="-mt-6 md:-mt-52 pb-3 md:pb-6 ">
        <MoviesList title={"Now Playing "} movies={movies?.nowPlayingMovies} />
        <MoviesList title={"Popular "} movies={movies?.popularMovies} />
        <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />
        <MoviesList title={"Trending"} movies={movies?.trendingMovies} />
      </div>
      {/* This will have multiple movie lists with n movie cards */}
    </div>
  );
};

export default SecondaryContainer;
