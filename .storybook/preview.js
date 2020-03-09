import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../src/shared/constants";
import "../src/index.css";

addDecorator(storyFn => (
  <ThemeProvider theme={THEME}>{storyFn()}</ThemeProvider>
));
