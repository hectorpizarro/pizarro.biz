import { createReducer } from "redux-act";
import * as actions from "./misc.actions";

const initState = {
  experiences: null,
  initRoute: false
};

const actionHandlers = {
  [actions.setExperiences]: (state, payload) => ({
    ...state,
    experiences: payload
  }),
  [actions.setFlagInitRoute]: (state, payload) => ({
    ...state,
    initRoute: true
  })
};

const misc = createReducer(actionHandlers, initState);

export default misc;
