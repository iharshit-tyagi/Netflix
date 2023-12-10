import React from "react";
import MovieCard from "./MovieCard";
import { sliderSettings } from "../utils/constants";
import Slider from "react-slick";
import { useSelector } from "react-redux";
const MoviesList = ({ title, movies }) => {
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearchPage);
  if (!movies) return;
  const movieWithPoster = movies.filter((movie) => {
    return movie.poster_path;
  });
  return (
    <div className="md:pl-6 pl-3  ">
      <h2 className="text-xl md:text-3xl text-white font-semibold pt-2 md:pt-3 mb-5 md:mb-8 pl-3 md:pl-5 ">
        {title}
      </h2>
      <Slider
        className="w-full overflow-visible  transition-all box-border"
        {...sliderSettings}
      >
        {movieWithPoster.map((movie) => {
          return (
            <div className="" key={movie.id}>
              <MovieCard posterUrl={movie.poster_path} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MoviesList;
