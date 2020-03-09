import React from "react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import toast from "./ducks";
import { Toast } from "./toast";

const rootReducer = combineReducers({ toast });
const store = configureStore({ reducer: rootReducer });

export default {
  title: "Shared / Toast",
  component: Toast,
  parameters: {
    notes: "Shared component: toast shows success or error global messages."
  }
};

export const Success = () => (
  <Toast message="Success message" isSuccess fade={false} />
);
Success.story = {
  decorators: [storyFn => <Provider store={store}>{storyFn()}</Provider>]
};

export const SuccessFade = () => (
  <Toast message="Success message" isSuccess fade />
);
SuccessFade.story = {
  decorators: [storyFn => <Provider store={store}>{storyFn()}</Provider>]
};

export const Error = () => (
  <Toast message="Error message" isSuccess={false} fade={false} />
);
Error.story = {
  decorators: [storyFn => <Provider store={store}>{storyFn()}</Provider>]
};

export const ErrorFade = () => (
  <Toast message="Error message" isSuccess={false} fade />
);
ErrorFade.story = {
  decorators: [storyFn => <Provider store={store}>{storyFn()}</Provider>]
};
