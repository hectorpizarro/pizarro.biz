/**
 * Manages Redux storage
 */
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// All reducers
import app from "./app/app.slice";
import modal from "./shared/appModal/appModal.slice";
import experiences from "./pages/experience/experience.slice";
import toast from "./shared/toast/toast.slice";

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
