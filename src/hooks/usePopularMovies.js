import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { options, POPULAR_MOVIE_API } from "../utils/constants";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIE_API, options);
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
