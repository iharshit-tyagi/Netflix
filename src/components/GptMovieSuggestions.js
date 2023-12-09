import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { langTranslation } from "../utils/languageTranslations";
const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const gptMovieTitles = gpt.gptMovieNames;
  const gptMovieList = gpt.movieList;
  const lang = useSelector((store) => store.config.lang);
  if (!gptMovieTitles) return null;
  return (
    <div className="bg-black bg-opacity-80 p-2 md:p-4 mt-4 ">
      <h2 className="text-white text-base md:text-2xl font-semibold pb-2 pl-3 md:pl-6 ">
        {langTranslation[lang]?.searchSuggestions}
      </h2>
      <div className="pl-1 md:pl-6 grid md:grid-cols-5 grid-cols-2">
        {gptMovieList.map((list) => {
          return <MovieCard posterUrl={list[0]?.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
