import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { options, TRENDING_MOVIE_API } from "../utils/constants";
import { useEffect } from "react";
const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(TRENDING_MOVIE_API, options);
    const json = await data.json();
    console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
};
export default useTrendingMovies;
