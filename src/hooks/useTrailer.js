import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
const useTrailer = (id) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/videos?language=en-US&autoplay=1",
      options
    );
    const json = await data.json();
    const filteredData = json.results.filter((ele) => {
      return ele.type == "Trailer";
    });
    const trailerData = filteredData.length ? filteredData[0] : json.results[0];

    dispatch(addTrailer(trailerData));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};
export default useTrailer;
