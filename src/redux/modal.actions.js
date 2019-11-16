import { createAction } from "redux-act";

/**
 * Show modal
 */
export const showModal = createAction(
  "Set modal id and data to open modal",
  (modalId, modalData) => ({ modalId, modalData })
);
/**
 * Hide modal
 */
export const hideModal = createAction("Delete modal id to close modal");
