import React from "react";
import About from "./about";

export default {
  title: "About Page",
  component: About,
  parameters: {
    notes: "About page, responsive versions available for 640, 768 and 1024"
  }
};

export const Test1 = () => <About />;
