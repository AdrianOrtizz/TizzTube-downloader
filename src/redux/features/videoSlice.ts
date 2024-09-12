import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "videoSlice",
  initialState: {
    URL: "",
  },
  reducers: {
    setURL: (state, action: PayloadAction<string>) => {
      state.URL = action.payload;
    },
    clearURL: (state) => {
      state.URL = "";
    },
  },
});

export const { setURL, clearURL } = videoSlice.actions;
export default videoSlice.reducer;
