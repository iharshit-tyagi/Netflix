import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { langTranslation } from "../utils/languageTranslations";
import openai from "../utils/openAi";
const GptSearchBar = () => {
  const searchText = useRef(null);
  const lang = useSelector((store) => store.config.lang);
  const handleGptSearchClick = () => {
    console.log(searchText.current.value);
    getSuggestions();
  };
  const getSuggestions = async () => {
    const movieResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(movieResults.choices);
  };
  return (
    <div className="pt-[10%]  ">
      <form className=" mx-auto flex w-2/4 p-5 bg-black rounded-lg">
        <input
          ref={searchText}
          className="flex-grow-[2] text-black text-xl px-4 py-2"
          type="text"
          placeholder={langTranslation[lang]?.searchPlaceHolder}
        />
        <button
          type="button"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          onClick={handleGptSearchClick}
          className=" rounded-lg  flex-grow-[0.5] py-2  ml-3 text-2xl text-white bg-red-600 hover:bg-red-500 "
        >
          {langTranslation[lang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
