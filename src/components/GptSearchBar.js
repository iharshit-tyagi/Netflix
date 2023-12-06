import React from "react";
import { useSelector } from "react-redux";
import { langTranslation } from "../utils/languageTranslations";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%]  ">
      <form className=" mx-auto flex w-2/4 p-5 bg-black rounded-lg">
        <input
          className="flex-grow-[2] text-black text-xl px-4 py-2"
          type="text"
          placeholder={langTranslation[lang]?.searchPlaceHolder}
        />
        <button
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className=" rounded-lg  flex-grow-[0.5] py-2  ml-3 text-2xl text-white bg-red-600 hover:bg-red-500 "
        >
          {langTranslation[lang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
