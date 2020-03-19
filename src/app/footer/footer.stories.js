import React from "react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../shared/constants";
import GlobalStyle from "../../globalStyle";
import Footer from "./footer";

const addDecorator = storyFn => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

export default {
  title: "App / Footer",
  component: Footer,
  parameters: {
    notes: "Footer, shown only on Contacts page."
  },
  decorators: [addDecorator]
};

export const Default = () => <Footer />;
