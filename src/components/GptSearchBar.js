import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { langTranslation } from "../utils/languageTranslations";
import openai from "../utils/openAi";
import { options } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const lang = useSelector((store) => store.config.lang);
  //Movie search on TMDB
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = () => {
    // console.log(searchText.current.value);
    getSuggestions();
  };
  const getSuggestions = async () => {
    const searchQuery =
      "Act as a movie recommendation system and suggest me some movies based on the query : " +
      searchText.current.value +
      " . Suggest me only names of 10 movies as comma separated in response. Like the example Given ahead. Exaample is Don, Dhoom, Mummy, Train, Animal.";
    const movieResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });

    //will Make  array of movie suggestions
    const gptMovieSuggestions = movieResults.choices[0]?.message?.content;
    const gptMovieArray = gptMovieSuggestions.split(", ");

    //Now getting data from TMDB
    const tmdbPromiseArray = gptMovieArray.map((movie) => {
      return searchMovieTmdb(movie);
    });
    const tmdbResults = await Promise.all(tmdbPromiseArray);

    dispatch(
      addGptMovies({ moviesList: tmdbResults, movieNames: gptMovieArray })
    );
  };

  return (
    <div className="pt-[40%]  md:pt-[10%]  ">
      <form className="ml-[17%] md:mx-auto flex w-1/4 md:w-2/4 p-3 md:p-5 bg-black rounded-lg">
        <input
          ref={searchText}
          className="md:flex-grow-[2] text-black text-sm md:text-xl px-1 md:px-4 md:py-2"
          type="text"
          placeholder={langTranslation[lang]?.searchPlaceHolder}
        />
        <button
          type="button"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          onClick={handleGptSearchClick}
          className=" rounded-lg  md:flex-grow-[0.5] py-2 ml-1 px-1 md:px-0  md:ml-3 text-sm md:text-2xl text-white bg-red-600 hover:bg-red-500 "
        >
          {langTranslation[lang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
