import React from "react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import app from "./ducks";
import { InternalNavBar as NavBar } from "./navBar";
import AppService from "../shared/appService";

export default {
  title: "Shared / Navigation Bar",
  component: NavBar,
  parameters: {
    notes:
      "Shared component: navigation bar shown on left column and as mobile modal."
  }
};

const addReduxDecorator = storyFn => {
  const rootReducer = combineReducers({ app });
  const store = configureStore({ reducer: rootReducer });
  return <Provider store={store}>{storyFn()}</Provider>;
};

export const LeftMobile = () => (
  <NavBar isLeft history={[]} isInitRoute={false} hideModal={AppService.noop} />
);
LeftMobile.story = {
  parameters: {
    viewport: { defaultViewport: "iphone5" }
  },
  decorators: [addReduxDecorator]
};

export const Left640 = () => (
  <NavBar isLeft history={[]} isInitRoute={false} hideModal={AppService.noop} />
);
Left640.story = {
  parameters: {
    viewport: { defaultViewport: "width640" }
  },
  decorators: [addReduxDecorator]
};

export const LeftIpad = () => (
  <NavBar isLeft history={[]} isInitRoute={false} hideModal={AppService.noop} />
);
LeftIpad.story = {
  parameters: {
    viewport: { defaultViewport: "ipad" }
  },
  decorators: [addReduxDecorator]
};

export const LeftDesktop = () => (
  <NavBar isLeft history={[]} isInitRoute={false} hideModal={AppService.noop} />
);
LeftDesktop.story = {
  parameters: {
    viewport: { defaultViewport: "desktop" }
  },
  decorators: [addReduxDecorator]
};

export const MobileMenu = () => (
  <NavBar
    isLeft={false}
    history={[]}
    isInitRoute={false}
    hideModal={AppService.noop}
  />
);
MobileMenu.story = {
  parameters: {
    viewport: { defaultViewport: "mobileMenu" }
  },
  decorators: [addReduxDecorator]
};
