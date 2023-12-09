import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import MovieSuggestionsList from "./MovieSuggestionsList";
const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const gptMovieTitles = gpt.gptMovieNames;
  const gptMovieList = gpt.movieList;
  // console.log(gptMovieTitles);
  // console.log(gptMovieList);

  if (!gptMovieTitles) return null;
  return (
    <div className="">
      {gptMovieTitles.map((movieTitle, index) => {
        return (
          <MovieSuggestionsList
            key={movieTitle}
            title={movieTitle}
            movies={gptMovieList[index]}
          />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestions;
