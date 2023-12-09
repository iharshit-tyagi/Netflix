import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { options, UPCOMING_MOVIES_API } from "../utils/constants";
import { useEffect } from "react";
const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_API, options);
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
