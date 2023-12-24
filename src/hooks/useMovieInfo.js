import React, { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieInfo, clearMovieInfo } from "../utils/moviesSlice";
const useMovieInfo = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
    return () => {
      dispatch(clearMovieInfo());
    };
  }, []);
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      options
    );
    const json = await data.json();
    dispatch(addMovieInfo(json));
  };

  return <div>useMovieInfo</div>;
};

export default useMovieInfo;
