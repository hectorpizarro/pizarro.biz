import React from "react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../../shared/constants";
import GlobalStyle from "../../../globalStyle";
import Card from "./detailCard";

const addDecorator = storyFn => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <div style={{ padding: "10px" }}>{storyFn()}</div>
    </ThemeProvider>
  );
};

const experience = {
  id: "1",
  company: "Atomic Reach",
  companyUrl: "https://www.atomicreach.com/",
  contractorCompany: "Band of Coders",
  country: "Canada",
  role: "Frontend Developer",
  fromMonth: "DEC",
  toMonth: "FEB",
  fromYear: "2019",
  toYear: "2020",
  time: "3m",
  timeDescription: "3 months",
  descriptionShort: [
    "Frontend developer providing maintenance to the React app and WordPress plugin."
  ],
  description: [
    "In the frontend developer role I provided bug fixes and code reviews to the React SPA web app and the WordPress plugin. The plugin had two versions, a vanilla JS codebase for the WordPress Classic editor and a React app for the Gutenberg editor.",
    "I was in charge of frontend duties but had to test the whole flow managing my own linux instance containing the Zend framework PHP API in order to detect bugs."
  ],
  tech_dev: "React, Redux, HTML, vanilla JavaScript, tinyMCE, jQuery.",
  tech_build: "WordPress, Linux VM with PHP Zend framework + MySQL.",
  tech_test: "Jest."
};

export default {
  title: "Pages / 4 Experience - Detail Card",
  component: Card,
  parameters: {
    notes:
      "Experience - Detail Card: Shows experience detail on modal for Desktop, as a card on mobile."
  },
  decorators: [addDecorator]
};

export const Desktop = () => <Card experience={experience} />;
Desktop.story = {
  parameters: {
    viewport: { defaultViewport: "desktop" }
  }
};

export const Mobile = () => <Card experience={experience} />;
Mobile.story = {
  parameters: {
    viewport: { defaultViewport: "iphone5" }
  }
};
