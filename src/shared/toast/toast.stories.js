import React from "react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import toast from "./ducks";
import { InternalToast as Toast } from "./toast";
import GlobalStyle from "../../globalStyle";
import { THEME } from "../constants";

const addReduxDecorator = storyFn => {
  const rootReducer = combineReducers({ toast });
  const store = configureStore({ reducer: rootReducer });
  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </Provider>
  );
};

export default {
  title: "Shared / Toast",
  component: Toast,
  parameters: {
    notes: "Shared component: toast shows success or error global messages."
  },
  decorators: [addReduxDecorator]
};

export const Success = () => (
  <Toast message="Success message" isSuccess fade={false} />
);

export const SuccessFade = () => (
  <Toast message="Success message" isSuccess fade />
);

export const Error = () => (
  <Toast message="Error message" isSuccess={false} fade={false} />
);

export const ErrorFade = () => (
  <Toast message="Error message" isSuccess={false} fade />
);
