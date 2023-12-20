import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
// import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";

const GptSearchPage = lazy(() => import("./GptSearchPage"));

const Browse = () => {
  //Fetches now playing Movies and Update the store
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearchPage);
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div className="w-full box-border">
      <Header />
      {showGptSearchPage ? (
        <Suspense>
          <GptSearchPage />
        </Suspense>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
  //   <div>
  //     <Header />
  //

  //   </div>
  // ) :
};

export default Browse;
