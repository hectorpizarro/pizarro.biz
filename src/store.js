/**
 * Manages Redux storage
 */
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// All reducers
import app from "./app/ducks";
import modal from "./shared/modal/ducks";
import experiences from "./pages/experience/ducks";
import toast from "./shared/toast/ducks";

// Combine all storage in a single object
const rootReducer = combineReducers({
  app,
  modal,
  experiences,
  toast
});

// Redux dev tools only available on dev environment
const store = configureStore({ reducer: rootReducer });

export default store;
