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
/**
 * Store experiences loaded from JSON to redux
 */
export const setExperiences = createAction("Sets experiences array");
/**
 * Store flag, used to move scroll when SPA is mounted
 */
export const setFlagInitRoute = createAction("Sets flag for initial route");

/**
 * Store browser screen width, height
 */
export const setScreenSize = createAction("Set browser screen width, height");
