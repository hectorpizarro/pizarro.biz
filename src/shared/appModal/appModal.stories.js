import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { THEME, MODAL_HEADER_MENU, MODAL_EXPERIENCE } from "../constants";
import GlobalStyle from "../../globalStyle";
import { InternalAppModal as AppModal } from "./appModal";
import app from "../../app/app.slice";

const addDecorator = storyFn => {
  const rootReducer = combineReducers({ app });
  const store = configureStore({ reducer: rootReducer });

  return (
    <Provider store={store}>
      <MemoryRouter>
        <ThemeProvider theme={THEME}>
          <GlobalStyle />
          {storyFn()}
        </ThemeProvider>
      </MemoryRouter>
    </Provider>
  );
};

export default {
  title: "Shared / Modal",
  component: AppModal,
  parameters: {
    notes: "Shared component: modal shows experience details, mobile menu bar."
  },
  decorators: [addDecorator]
};

export const MobileMenuBar = () => <AppModal modalId={MODAL_HEADER_MENU} />;
MobileMenuBar.story = {
  parameters: {
    viewport: { defaultViewport: "iphone5" }
  }
};

export const ExperienceDetail = () => {
  const modalId = 1;
  const experiences = {
    1: {
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
    }
  };
  return (
    <AppModal
      modalId={MODAL_EXPERIENCE}
      experiences={experiences}
      modalData={modalId}
    />
  );
};
