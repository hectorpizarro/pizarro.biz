import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

export default {
  title: "Shared / Button",
  component: Button,
  parameters: {
    notes: "Shared component: button used in Contact form."
  }
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
