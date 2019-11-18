import { createReducer } from "redux-act";
import * as actions from "./toast.actions";
import { TOAST_EXP_TIME } from "../constants";

/**
 * Initial state
 */
const initState = {
  // If "" toast is hidden.
  message: "",
  // Bg color blue if TRUE, otherwise is error, bg is red.
  isSuccess: false,
  // Flag to fade toast before hiding it.
  fade: false
};

const actionHandlers = {
  // Resets all and hides toast
  [actions.hideToast]: state => ({
    ...state,
    message: "",
    isSuccess: false,
    fade: false
  }),
  // set 'fade' to TRUE to trigger fading animation. After 600ms
  // executes hideToast to reset all and hide toast.
  [actions.fadeToast]: state => {
    if (state.message !== "") {
      // Toast message will fade now, reset in 600ms
      setTimeout(actions.hideToast, 600);
      return {
        ...state,
        fade: true
      };
    }
    return state;
  },
  /**
   * Set message to show toast. After TOAST_EXP_TIME will start flow to fade, then hide toast.
   * @param {payload} - {message, isSuccess}
   */
  [actions.showToast]: (state, payload) => {
    // Toast message disappears automatically after TOAST_EXP_TIME ms
    setTimeout(actions.fadeToast, TOAST_EXP_TIME);
    return {
      ...state,
      message: payload.message,
      isSuccess: payload.isSuccess,
      fade: false
    };
  }
};

// Data is available in state.toast
const toast = createReducer(actionHandlers, initState);

export default toast;
