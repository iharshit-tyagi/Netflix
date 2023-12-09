import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { options, TOP_RATED_MOVIE_API } from "../utils/constants";
import { useEffect } from "react";
const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIE_API, options);
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
   !topRatedMovies && getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
