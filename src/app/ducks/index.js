/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    // flag to scroll to url defined on url on SPA initial load
    initRoute: false
  },
  reducers: {
    /**
     * Sets flag to TRUE to scroll automatically to route in url only once.
     */
    setFlagInitRoute(state, action) {
      state.initRoute = true;
    }
  }
});

export const { setFlagInitRoute } = appSlice.actions;

export default appSlice.reducer;
