export const NF_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const NOW_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const ORIGNAL_IMG_BASE_URL = "https://image.tmdb.org/t/p/w200";

export const TRENDING_MOVIE_API =
  "https://api.themoviedb.org/3/trending/all/week";
export const POPULAR_MOVIE_API =
  "https://api.themoviedb.org/3/movie/popular?&page=1";

export const TOP_RATED_MOVIE_API =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1";
export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?&page=1";
export const sliderSettings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
  ],
};
export const SUPPORTED_LANGUAGES = [
  {
    code: "english",
    name: "English",
  },
  {
    code: "hindi",
    name: "Hindi",
  },
  {
    code: "spanish",
    name: "Spanish",
  },
  {
    code: "french",
    name: "French",
  },
];
export const GPT_SK = process.env.REACT_APP_OPENAI_SK;
