import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { addParameters } from "@storybook/react";
import { THEME } from "../src/shared/constants";
import "../src/index.css";

const addTheme = storyFn => (
  <ThemeProvider theme={THEME}>{storyFn()}</ThemeProvider>
);
addDecorator(addTheme);

const customViewPorts = {
  iphone5: {
    name: "iPhone 5 320w x 568h",
    styles: {
      height: "568px",
      width: "320px"
    },
    type: "mobile"
  },
  ipad: {
    name: "iPad 768w x 1024h",
    styles: {
      height: "1024px",
      width: "768px"
    },
    type: "tablet"
  },
  desktop: {
    name: "Desktop 1024w x 768h",
    styles: {
      height: "768px",
      width: "1024px"
    },
    type: "desktop"
  }
};

addParameters({
  viewport: {
    viewports: customViewPorts,
    defaultViewport: "desktop"
  }
});
