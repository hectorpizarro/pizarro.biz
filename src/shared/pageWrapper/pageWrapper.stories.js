import React from "react";
import { ThemeProvider } from "styled-components";
import { THEME, PAGE_ABOUT } from "../constants";
import GlobalStyle from "../../globalStyle";
import PageWrapper from "./pageWrapper";

const addDecorator = storyFn => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

export default {
  title: "Shared / PageWrapper",
  component: PageWrapper,
  parameters: {
    notes: "Shared component: page wrapper."
  },
  decorators: [addDecorator]
};

export const wrappedTestAbout = () => (
  <PageWrapper name={PAGE_ABOUT} title="Test title" />
);

export const wrappedTestAboutWithFooter = () => (
  <PageWrapper name={PAGE_ABOUT} title="Test title" withFooter />
);
