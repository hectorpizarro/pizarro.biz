import { createAction } from "redux-act";

/**
 * Hides toast alert
 */
export const hideToast = createAction("Hide toast alert");
/**
 * Fades toast alert
 */
export const fadeToast = createAction("Fade toast alert, will reset in 600 ms");
/**
 * Shows toast alert
 */
export const showToast = createAction(
  "Show toast alert",
  (message, isSuccess) => ({ message, isSuccess })
);
