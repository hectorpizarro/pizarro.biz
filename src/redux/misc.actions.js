import { createAction } from "redux-act";

/**
 * Store experiences loaded from JSON to redux
 */
export const setExperiences = createAction("Sets experiences array");
/**
 * Store flag, used to move scroll when SPA is mounted
 */
export const setFlagInitRoute = createAction("Sets flag for initial route");
