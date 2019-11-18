import { createReducer } from "redux-act";
import * as actions from "./modal.actions";

/**
 * Initial state
 */
const initState = {
  // Can contain any string id define as MODAL_* in constants.js
  // Null will hide modal.
  modalId: null,
  // Any additional data. Currently used to store experience id if modal is loaded from Experiences desktop.js
  modalData: null
};

const actionHandlers = {
  /**
   * Store id and optional data to show modal.
   * @param {Object} - {modalId, modalData}
   */
  [actions.showModal]: (state, payload) => ({
    ...state,
    modalId: payload.modalId,
    modalData: payload.modalData || null
  }),
  // reset all to hide modal
  [actions.hideModal]: state => ({
    ...state,
    modalId: null,
    modalData: null
  })
};

// Data will be avialable in state.modal
const modal = createReducer(actionHandlers, initState);

export default modal;
