import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    setMovies: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return [];
    },
  },
});
export const { addUser, removeUser } = moviesSlice.actions;

export default moviesSlice.reducer;
