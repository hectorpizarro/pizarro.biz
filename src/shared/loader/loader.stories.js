import React from "react";
import Loader from "./loader";
import { LOADER_APP, LOADER_PAGE } from "../constants";

export default {
  title: "Shared / Loader",
  component: Loader,
  parameters: {
    notes: "Shared component: loader shown inside pages, buttons.",
    backgrounds: [{ name: "white", value: "#ffffff", default: true }]
  },
  decorators: [
    storyFn => <div style={{ border: "1px dotted black" }}>{storyFn()}</div>
  ]
};

const grayParameter = {
  parameters: {
    backgrounds: [{ name: "white", value: "#4a5568", default: true }]
  }
};

// type: PropTypes.oneOf([LOADER_APP, LOADER_PAGE, LOADER_BUTTON]),
// inverse: PropTypes.bool

export const ForAppOnWhite = () => <Loader type={LOADER_APP} />;

export const ForPageOnWhite = () => <Loader type={LOADER_PAGE} />;

export const ForButtonOnWhite = () => <Loader />;

export const ForAppOnWhiteInverse = () => <Loader type={LOADER_APP} inverse />;

export const ForPageOnWhiteInverse = () => (
  <Loader type={LOADER_PAGE} inverse />
);

export const ForButtonOnWhiteInverse = () => <Loader inverse />;

export const ForAppOnGray = () => <Loader type={LOADER_APP} />;
ForAppOnGray.story = grayParameter;

export const ForPageOnGray = () => <Loader type={LOADER_PAGE} />;
ForAppOnGray.story = grayParameter;

export const ForButtonOnGray = () => <Loader />;
ForButtonOnGray.story = grayParameter;

export const ForAppOnGrayInverse = () => <Loader type={LOADER_APP} inverse />;
ForAppOnGrayInverse.story = grayParameter;

export const ForPageOnGrayInverse = () => <Loader type={LOADER_PAGE} inverse />;
ForPageOnGrayInverse.story = grayParameter;

export const ForButtonOnGrayInverse = () => <Loader inverse />;
ForButtonOnGrayInverse.story = grayParameter;
