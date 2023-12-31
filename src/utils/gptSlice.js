import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchPage: false,
    gptMovieNames: null,
    movieList: null,
  },
  reducers: {
    toggleGptSearchPage: (state, action) => {
      state.showGptSearchPage = !state.showGptSearchPage;
    },
    addGptMovies: (state, action) => {
      const { moviesList, movieNames } = action.payload;
      state.gptMovieNames = movieNames;
      state.movieList = moviesList;
    },
    clearGptMovies: (state) => {
      state.movieList = null;
    },
  },
});
export const { toggleGptSearchPage, addGptMovies, clearGptMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
