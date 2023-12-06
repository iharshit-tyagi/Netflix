import React from "react";
import MovieCard from "./MovieCard";
import { sliderSettings } from "../utils/constants";
import Slider from "react-slick";
const MoviesList = ({ title, movies }) => {
  if (!movies) return;
  return (
    // <div className="p-5">
    //   <h2 className="text-2xl font-semibold py-6 ">{title}</h2>
    //   <div className="flex overflow-x-scroll">
    //     <div className="flex">
    //       {movies.map((movie) => {
    //         return (
    //           <div className="" key={movie.id}>
    //             <MovieCard posterUrl={movie.poster_path} />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div className="pl-6  ">
      <h2 className="text-3xl text-white font-semibold pt-3 mb-8 pl-5 ">
        {title}
      </h2>
      <Slider
        className="w-full overflow-visible  transition-all box-border"
        {...sliderSettings}
      >
        {movies.map((movie) => {
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
