import React from "react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import toast from "./ducks";
import { Toast } from "./toast";

export default {
  title: "Shared / Toast",
  component: Toast,
  parameters: {
    notes: "Shared component: toast shows success or error global messages."
  }
};

const addReduxDecorator = storyFn => {
  const rootReducer = combineReducers({ toast });
  const store = configureStore({ reducer: rootReducer });
  return <Provider store={store}>{storyFn()}</Provider>;
};

export const Success = () => (
  <Toast message="Success message" isSuccess fade={false} />
);
Success.story = {
  decorators: [addReduxDecorator]
};

export const SuccessFade = () => (
  <Toast message="Success message" isSuccess fade />
);
SuccessFade.story = {
  decorators: [addReduxDecorator]
};

export const Error = () => (
  <Toast message="Error message" isSuccess={false} fade={false} />
);
Error.story = {
  decorators: [addReduxDecorator]
};

export const ErrorFade = () => (
  <Toast message="Error message" isSuccess={false} fade />
);
ErrorFade.story = {
  decorators: [addReduxDecorator]
};
