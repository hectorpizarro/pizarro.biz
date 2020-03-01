import { createSlice } from "@reduxjs/toolkit";
import { TOAST_EXP_TIME } from "../../../constants";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    // If "" toast is hidden.
    message: "",
    // Bg color blue if TRUE, otherwise is error, bg is red.
    isSuccess: false,
    // Flag to fade toast before hiding it.
    fade: false
  },
  reducers: {
    // Resets all and hides toast
    hideToast(state, action) {
      state.message = "";
      state.isSuccess = false;
      state.fade = false;
    },
    // IF there is message sets 'fade' to TRUE to trigger fading animation.
    fadeToast(state, action) {
      if (state.message !== "") {
        state.fade = true;
      }
    },
    showToast(state, action) {
      const { message, isSuccess } = action.payload;
      state.message = message;
      state.isSuccess = isSuccess;
      state.fade = false;
    }
  }
});

export const { hideToast, fadeToast, showToast } = toastSlice.actions;

export const doFadeToast = () => async dispatch => {
  dispatch(fadeToast());
  setTimeout(() => {
    dispatch(hideToast());
  }, 600);
};

export const doShowToast = (message, isSuccess) => async dispatch => {
  dispatch(showToast({ message, isSuccess }));
  setTimeout(() => {
    dispatch(doFadeToast());
  }, TOAST_EXP_TIME);
};

export default toastSlice.reducer;
