import Header from "./Header";
import { options, NOW_PLAYING_API } from "../utils/constants";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
const Browse = () => {
  const [moviesList, setMoviesList] = useState([]);
  const getTrendingMovies = async () => {
    const data = await fetch(NOW_PLAYING_API, options);
    const json = await data.json();
    console.log(json.results);
    setMoviesList(json.results);
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
  return (
    <div>
      <Header />
      {/* Trending Movies Div */}
      {moviesList.length !== 0 && (
        <div className="flex gap-4 mx-2 flex-wrap">
          {moviesList.map((ele) => {
            return <MovieCard title={ele.title} posterUrl={ele.poster_path} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Browse;
