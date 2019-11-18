import { createReducer } from "redux-act";
import * as actions from "./misc.actions";

const initState = {
  experiences: null, // experiences array
  // flag to scroll to url defined on url on SPA initial load
  initRoute: false
};

const actionHandlers = {
  /**
   * Store experiences
   * @param {Array} payload - Experiences array from JSON
   */
  [actions.setExperiences]: (state, payload) => ({
    ...state,
    experiences: payload
  }),
  /**
   * Sets flag to TRUE to scroll automatically to route in url only once.
   */
  [actions.setFlagInitRoute]: state => ({
    ...state,
    initRoute: true
  })
};

//Create reducer, data will be available in state.misc
const misc = createReducer(actionHandlers, initState);

export default misc;
