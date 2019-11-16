import { createStore } from "redux";
import { assignAll, createReducer } from "redux-act";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import * as actions from "./actions";

const initState = {
  modalId: null,
  modalData: null,
  experiences: null,
  initRoute: false,
  screenWidth: 0,
  screenHeight: 0
};

const appReducer = createReducer(
  {
    [actions.showModal]: (state, payload) => ({
      ...state,
      modalId: payload.modalId,
      modalData: payload.modalData || null
    }),
    [actions.hideModal]: (state, payload) => ({
      ...state,
      modalId: null,
      modalData: null
    }),
    [actions.setExperiences]: (state, payload) => ({
      ...state,
      experiences: payload
    }),
    [actions.setFlagInitRoute]: (state, payload) => ({
      ...state,
      initRoute: true
    }),
    [actions.setScreenSize]: (state, payload) => ({
      ...state,
      screenWidth: payload.width,
      screenHeight: payload.height
    })
  },
  initState
);

const store = createStore(appReducer, composeWithDevTools());

assignAll(actions, store);

export default store;
