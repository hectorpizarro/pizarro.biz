import React from "react";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import Button from "./button";
import { THEME } from "../constants";
import GlobalStyle from "../../globalStyle";

const addDecorator = storyFn => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle />
    <div style={{ padding: "10px", border: "1px dotted black" }}>
      {storyFn()}
    </div>
  </ThemeProvider>
);

export default {
  title: "Shared / Button",
  component: Button,
  parameters: {
    notes: "Shared component: button used in Contact form."
  },
  decorators: [addDecorator]
};

export const Default = () => (
  <Button label="Test" onClick={action("button-click")} />
);

export const DefaultDisabled = () => (
  <Button label="Test" disabled onClick={action("button-click")} />
);

export const Inverse = () => (
  <Button label="Test" inverse onClick={action("button-click")} />
);

export const InverseDisabled = () => (
  <Button label="Test" disabled inverse onClick={action("button-click")} />
);
