import React from "react";
import Loader from "./loader";
import { LOADER_APP, LOADER_PAGE } from "../constants";

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

// type: PropTypes.oneOf([LOADER_APP, LOADER_PAGE, LOADER_BUTTON]),
// inverse: PropTypes.bool

export const ForAppOnWhite = () => <Loader type={LOADER_APP} />;
ForAppOnWhite.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff", default: true }]
  }
};

export const ForPageOnWhite = () => <Loader type={LOADER_PAGE} />;
ForAppOnWhite.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff", default: true }]
  }
};

export const ForButtonOnWhite = () => <Loader />;
ForButtonOnWhite.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff", default: true }]
  }
};

export const ForAppOnWhiteInverse = () => <Loader type={LOADER_APP} inverse />;
ForAppOnWhiteInverse.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff", default: true }]
  }
};

export const ForPageOnWhiteInverse = () => (
  <Loader type={LOADER_PAGE} inverse />
);
ForPageOnWhiteInverse.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff", default: true }]
  }
};

export const ForButtonOnWhiteInverse = () => <Loader inverse />;
ForButtonOnWhiteInverse.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff", default: true }]
  }
};

export const ForAppOnGray = () => <Loader type={LOADER_APP} />;
ForAppOnGray.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#4a5568", default: true }]
  }
};

export const ForPageOnGray = () => <Loader type={LOADER_PAGE} />;
ForAppOnGray.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#4a5568", default: true }]
  }
};

export const ForButtonOnGray = () => <Loader />;
ForButtonOnGray.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#4a5568", default: true }]
  }
};

export const ForAppOnGrayInverse = () => <Loader type={LOADER_APP} inverse />;
ForAppOnGrayInverse.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#4a5568", default: true }]
  }
};

export const ForPageOnGrayInverse = () => <Loader type={LOADER_PAGE} inverse />;
ForPageOnGrayInverse.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#4a5568", default: true }]
  }
};

export const ForButtonOnGrayInverse = () => <Loader inverse />;
ForButtonOnGrayInverse.story = {
  parameters: {
    backgrounds: [{ name: "white", value: "#4a5568", default: true }]
  }
};
