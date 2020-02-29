import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    // Can contain any string id define as MODAL_* in constants.js
    // Null will hide modal.
    modalId: null,
    // Any additional data. Currently used to store experience id if modal is loaded from Experiences desktop.js
    modalData: null
  },
  reducers: {
    /**
     * Set modal id and data to open modal
     * @param {Object} state - Current state
     * @param {Object} action - {payload}
     */
    showModal(state, action) {
      const { id, data = null } = action.payload;
      state.modalId = id;
      state.modalData = data;
    },
    /**
     * Delete modal id to close modal
     * @param {Object} state  - Current state
     */
    hideModal(state) {
      state.modalId = null;
      state.modalData = null;
    }
  }
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
