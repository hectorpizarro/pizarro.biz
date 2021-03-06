import React from "react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import app from "../app.slice";
import { InternalNavBar as NavBar } from "./navBar";
import AppService from "../../shared/appService";
import GlobalStyle from "../../globalStyle";
import { THEME } from "../../shared/constants";
import "../../index.css";

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
  title: "App / Navigation Bar",
  component: NavBar,
  parameters: {
    notes: "Navigation bar shown on left column and as mobile modal."
  },
  decorators: [addDecorator]
};

export const Left640 = () => (
  <NavBar
    isLeft
    history={{}}
    isInitRoute={false}
    propHideModal={AppService.noop}
  />
);
Left640.story = {
  parameters: {
    viewport: { defaultViewport: "width640" }
  }
};

export const LeftIpad = () => (
  <NavBar
    isLeft
    history={{}}
    isInitRoute={false}
    propHideModal={AppService.noop}
  />
);
LeftIpad.story = {
  parameters: {
    viewport: { defaultViewport: "ipad" }
  }
};

export const LeftDesktop = () => (
  <NavBar
    isLeft
    history={{}}
    isInitRoute={false}
    propHideModal={AppService.noop}
  />
);
LeftDesktop.story = {
  parameters: {
    viewport: { defaultViewport: "desktop" }
  }
};

export const MobileMenu = () => (
  <NavBar
    isLeft={false}
    history={{}}
    isInitRoute={false}
    propHideModal={AppService.noop}
  />
);
MobileMenu.story = {
  parameters: {
    viewport: { defaultViewport: "mobileMenu" }
  }
};

export const LeftMobile = () => (
  <NavBar
    isLeft
    history={{}}
    isInitRoute={false}
    propHideModal={AppService.noop}
  />
);
LeftMobile.story = {
  parameters: {
    viewport: { defaultViewport: "iphone5" }
  }
};
