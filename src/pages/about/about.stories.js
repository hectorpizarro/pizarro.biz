import React from "react";
import About from "./about";

export default {
  title: "Pages / About",
  component: About,
  parameters: {
    notes: "About page, responsive versions available for 640, 768 and 1024."
  }
};

export const Desktop1024x768 = () => <About />;
Desktop1024x768.story = {
  parameters: {
    viewport: { defaultViewport: "desktop" }
  }
};

export const iPad768x1024 = () => <About />;
iPad768x1024.story = {
  parameters: {
    viewport: { defaultViewport: "ipad" }
  }
};

export const Mobile320x568 = () => <About />;
Mobile320x568.story = {
  parameters: {
    viewport: { defaultViewport: "iphone5" }
  }
};
