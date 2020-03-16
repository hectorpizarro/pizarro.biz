/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

// Valid status values
// show experiences list
export const STATUS_IDLE = "status_idle";
// hide content, show loader
export const STATUS_LOADING = "status_loading";
// fetch experiences completed, data loaded or error detected
export const STATUS_LOADED = "status_loaded";

const experiencesSlice = createSlice({
  name: "experiences",
  initialState: {
    allIds: [],
    byId: {},
    status: STATUS_LOADING,
    error: ""
  },
  reducers: {
    startLoading(state, action) {
      state.status = STATUS_LOADING;
      state.error = "";
    },
    endLoading(state, action) {
      state.status = STATUS_IDLE;
      state.error = "";
    },
    storeError(state, action) {
      const { error = "Unknown error" } = action.payload;
      state.status = STATUS_LOADED;
      state.allIds = [];
      state.byId = {};
      state.error = error;
    },
    storeExperiences(state, action) {
      const { allIds = [], byId = {} } = action.payload;
      state.status = STATUS_LOADED;
      state.allIds = allIds;
      state.byId = byId;
      state.error = "";
    }
  }
});

export const {
  startLoading,
  endLoading,
  storeError,
  storeExperiences
} = experiencesSlice.actions;

// Async functions

export const fetchExperiences = () => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await Axios.get("/experiences");
    dispatch(storeExperiences(response.data));
  } catch (error) {
    dispatch(storeError(error.message));
  }
};

export default experiencesSlice.reducer;
