import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { options, NOW_PLAYING_API } from "../utils/constants";
import { useEffect, useState } from "react";
const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(NOW_PLAYING_API, options);
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlayingMovies && getTrendingMovies();
  }, []);
};
export default useNowPlayingMovies;
