import { createReducer } from "redux-act";
import * as actions from "./toast.actions";
import { TOAST_EXP_TIME } from "../constants";

const initState = {
  message: "",
  isSuccess: false,
  fade: false
};

const actionHandlers = {
  [actions.hideToast]: state => ({
    ...state,
    message: "",
    isSuccess: false,
    fade: false
  }),
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

const toast = createReducer(actionHandlers, initState);

export default toast;
