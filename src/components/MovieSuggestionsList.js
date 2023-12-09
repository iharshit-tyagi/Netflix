import React from "react";
import MovieCard from "./MovieCard";
import { sliderSettings } from "../utils/constants";
import Slider from "react-slick";
import { useSelector } from "react-redux";
const MovieSuggestionsList = ({ title, movies }) => {
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearchPage);
  if (!movies) return;
  const movieWithPoster = movies.filter((movie) => {
    return movie.poster_path;
  });
  return (
    <div className="pl-6  ">
      <h2 className="text-3xl text-white font-semibold pt-3 mb-8 pl-5 ">
        {title}
      </h2>
      <Slider
        className="w-full overflow-visible  transition-all box-border"
        {...sliderSettings}
        slidesToShow={1}
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

export default MovieSuggestionsList;
