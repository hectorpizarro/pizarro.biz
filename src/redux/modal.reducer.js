import { createReducer } from "redux-act";
import * as actions from "./modal.actions";

const initState = {
  modalId: null,
  modalData: null
};

const actionHandlers = {
  [actions.showModal]: (state, payload) => ({
    ...state,
    modalId: payload.modalId,
    modalData: payload.modalData || null
  }),
  [actions.hideModal]: (state, payload) => ({
    ...state,
    modalId: null,
    modalData: null
  })
};

const modal = createReducer(actionHandlers, initState);

export default modal;
