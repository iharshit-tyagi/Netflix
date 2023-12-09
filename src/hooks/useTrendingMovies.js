import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { options, TRENDING_MOVIE_API } from "../utils/constants";
import { useEffect } from "react";
const useTrendingMovies = () => {
  const trendingMovies = useSelector((store) => store.movie.trendingMovies);
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(TRENDING_MOVIE_API, options);
    const json = await data.json();

    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  }, []);
};
export default useTrendingMovies;
