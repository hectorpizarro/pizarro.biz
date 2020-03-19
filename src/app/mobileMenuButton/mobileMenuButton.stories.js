import React from "react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../shared/constants";
import GlobalStyle from "../../globalStyle";
import MobileMenuButton from "./mobileMenuButton";
import app from "../app.slice";

const addDecorator = storyFn => {
  const rootReducer = combineReducers({ app });
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
  title: "App / Mobile Menu Button",
  component: MobileMenuButton,
  parameters: {
    notes: "Menu button shown dfloating on mobile version.",
    viewport: { defaultViewport: "mobileMenu" }
  },
  decorators: [addDecorator]
};

export const Default = () => <MobileMenuButton />;
