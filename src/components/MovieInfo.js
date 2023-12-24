import React from "react";
import useMovieInfo from "../hooks/useMovieInfo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ShimmerGptMovies from "./ShimmerGptMovies";
import { ORIGNAL_IMG_BASE_URL } from "../utils/constants";
import { NF_URL } from "../utils/constants";
import VideoBackground from "./VideoBackground";
import Header from "./Header";
const MovieInfo = () => {
  const param = useParams();
  const { movieId } = param;
  useMovieInfo(movieId);
  const movieInfo = useSelector((store) => store.movie.movieInfo);
  if (!movieInfo)
    return (
      <div className="mt-24">
        <ShimmerGptMovies />
      </div>
    );

  const {
    title,
    overview,
    genres,
    release_date,
    runtime,
    vote_average,
    vote_count,
  } = movieInfo;
  console.log(movieInfo);
  const genreNames = genres.map((genre) => genre.name).join(", ");
  return (
    <div className=" bg-black h-screen  ">
      <img
        className="mx-auto md:mx-0 w-48 md:pl-4 pt-3 absolute"
        src={NF_URL}
        alt="logo"
      />
      <img
        className="block md:hidden mx-auto pt-32 w-3/4 "
        src={ORIGNAL_IMG_BASE_URL + movieInfo.poster_path}
        alt="poster"
      />
      <div className=" w-full aspect-video  absolute pt-28 pl-10 bg-gradient-to-tr from-black ">
        <h1 className="text-lg md:text-4xl font-bold w-3/4  text-white">
          {title}
        </h1>
        <p className="hidden md:block py-6 text-xl w-3/4 text-white">
          {overview}
        </p>

        <p className=" pb-1 text-lg  text-white">
          <span className="text-xl font-semibold">Genre: </span> {genreNames}
        </p>
        <p className=" pb-1  text-lg text-white">
          <span className="text-xl font-semibold">Release Date: </span>
          {release_date}
        </p>
        <p className="  pb-1 text-lg text-white">
          <span className="text-xl font-semibold">Runtime: </span>
          {runtime} minutes
        </p>
        <p className="  pb-1 text-lg text-white">
          <span className="text-xl font-semibold">Rating: </span>
          {vote_average} ⭐ ,{" "}
          <span className="text-xl font-semibold">Vote Count: </span>
          {vote_count}
        </p>
      </div>
      <div className="hidden md:block">
        <VideoBackground id={movieId} />
      </div>
    </div>
  );
};

export default MovieInfo;
