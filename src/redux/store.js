import { assignAll } from "redux-act";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

// All actions
import * as miscActions from "./misc.actions";
import * as modalActions from "./modal.actions";
import * as toastActions from "./toast.actions";

// All reducers
import misc from "./misc.reducer";
import modal from "./modal.reducer";
import toast from "./toast.reducer";

const rootReducer = combineReducers({
  misc,
  modal,
  toast
});

const store = createStore(rootReducer, composeWithDevTools());

assignAll(miscActions, store);
assignAll(modalActions, store);
assignAll(toastActions, store);

export default store;
