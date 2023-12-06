import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";
export const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: moviesSlice,
    gpt: gptSlice,
    config: configSlice,
  },
});
