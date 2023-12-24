import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { sliderSettings } from "../utils/constants";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const MoviesList = ({ title, movies }) => {
  const handleMovieClick = (e) => {
    if (!isSliding) {
      // Your navigation logic here
    } else {
      // Prevent the default behavior (link navigation) during sliding
      e.preventDefault();
    }
  };
  const [isSliding, setIsSliding] = useState(false);

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
        beforeChange={() => setIsSliding(true)}
        afterChange={() => setIsSliding(false)}
      >
        {movieWithPoster.map((movie) => {
          return (
            <Link key={movie.id} to={"/" + movie.id}>
              <div className="" onClick={handleMovieClick}>
                <MovieCard posterUrl={movie.poster_path} />
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default MoviesList;
