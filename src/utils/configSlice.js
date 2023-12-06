import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
  name: "config",
  initialState: {
    lang: "english",
  },
  reducers: {
    updateLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { updateLang } = config.actions;
export default config.reducer;
