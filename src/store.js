/**
 * Manages Redux storage
 */
import { assignAll } from "redux-act";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// All actions
import * as miscActions from "./redux/misc.actions";
import * as toastActions from "./redux/toast.actions";

// All reducers
import misc from "./redux/misc.reducer";
import modal from "./shared/modal/ducks";
import experiences from "./experience/ducks";
import toast from "./redux/toast.reducer";

// Combine all storage in a single object
const rootReducer = combineReducers({
  misc,
  modal,
  experiences,
  toast
});

// Redux dev tools only available on dev environment
const store = configureStore({ reducer: rootReducer });

// Assign all actions to store
assignAll(miscActions, store);
assignAll(toastActions, store);

export default store;
