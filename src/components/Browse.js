import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MovieCard from "./MovieCard";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  //Fetches now playing Movies and Update the store
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
