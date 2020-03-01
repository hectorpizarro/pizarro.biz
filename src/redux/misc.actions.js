import { createAction } from "redux-act";

/**
 * Store flag, used to move scroll when SPA is initially mounted
 */
export const setFlagInitRoute = createAction("Sets flag for initial route");
