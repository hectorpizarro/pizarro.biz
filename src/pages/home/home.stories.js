import React from "react";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import app from "../../app/app.slice";
import { THEME, PAGE_HOME } from "../../shared/constants";
import GlobalStyle from "../../globalStyle";
import Home from "./home";
import { StyledHome } from "../../shared/pageWrapper/pageWrapper";

const addDecorator = storyFn => {
  const rootReducer = combineReducers({ app });
  const store = configureStore({ reducer: rootReducer });

  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <StyledHome name={PAGE_HOME}>{storyFn()}</StyledHome>
      </ThemeProvider>
    </Provider>
  );
};

export default {
  title: "Pages / 1 Home",
  component: Home,
  parameters: {
    notes: "Home page, responsive versions and animations."
  },
  decorators: [addDecorator]
};

export const Desktop1024x768 = () => <Home />;
Desktop1024x768.story = {
  parameters: {
    viewport: { defaultViewport: "desktop" }
  }
};

export const iPad768x1024 = () => <Home />;
iPad768x1024.story = {
  parameters: {
    viewport: { defaultViewport: "ipad" }
  }
};

export const Mobile640x640 = () => <Home />;
Mobile640x640.story = {
  parameters: {
    viewport: { defaultViewport: "width640" }
  }
};

export const Mobile320x568 = () => <Home />;
Mobile320x568.story = {
  parameters: {
    viewport: { defaultViewport: "iphone5" }
  }
};
