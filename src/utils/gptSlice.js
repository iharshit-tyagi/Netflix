import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchPage: false,
    gptMovies: null,
  },
  reducers: {
    toggleGptSearchPage: (state, action) => {
      state.showGptSearchPage = !state.showGptSearchPage;
    },
    addGptMovies: (state, action) => {
      state.gptMovies = action.payload;
    },
  },
});
export const { toggleGptSearchPage, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
