import React from "react";
import Loader from "./loader";

export default {
  title: "Shared / Loader",
  component: Loader,
  parameters: {
    notes: "Shared component: loader shown inside pages, buttons."
  },
  decorators: [
    storyFn => <div style={{ border: "1px dotted black" }}>{storyFn()}</div>
  ]
};

export const ForPageOnWhite = () => <Loader />;
ForPageOnWhite.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff", default: true }]
  }
};
export const ForPageOnGray = () => <Loader />;
ForPageOnGray.story = {
  parameters: {
    backgrounds: [{ name: "gray700", value: "#4a5568", default: true }]
  }
};

export const ForButtonOnWhite = () => <Loader forButton />;
ForButtonOnWhite.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff", default: true }]
  }
};
export const ForButtonOnGray = () => <Loader forButton />;
ForButtonOnGray.story = {
  parameters: {
    backgrounds: [{ name: "gray700", value: "#4a5568", default: true }]
  }
};
