import React from "react";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import app from "../../app/app.slice";
import { THEME, PAGE_ABOUT } from "../../shared/constants";
import GlobalStyle from "../../globalStyle";
import {
  StyledElement,
  StyledSection,
  StyledTitle,
  StyledTitleWrap
} from "../../shared/pageWrapper/pageWrapper";
import Skills from "./skills";

const addDecorator = storyFn => {
  const rootReducer = combineReducers({ app });
  const store = configureStore({ reducer: rootReducer });

  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <StyledElement name={PAGE_ABOUT}>
          <StyledSection>
            <StyledTitleWrap>
              <StyledTitle>Skills</StyledTitle>
            </StyledTitleWrap>
            {storyFn()}
          </StyledSection>
        </StyledElement>
      </ThemeProvider>
    </Provider>
  );
};

export default {
  title: "Pages / 3 Skills",
  component: Skills,
  parameters: {
    notes: "Skills page, responsive versions available for 640, 768 and 1024."
  },
  decorators: [addDecorator]
};

export const Desktop1024x768 = () => <Skills />;
Desktop1024x768.story = {
  parameters: {
    viewport: { defaultViewport: "desktop" }
  }
};

export const iPad768x1024 = () => <Skills />;
iPad768x1024.story = {
  parameters: {
    viewport: { defaultViewport: "ipad" }
  }
};

export const Mobile640x640 = () => <Skills />;
Mobile640x640.story = {
  parameters: {
    viewport: { defaultViewport: "width640" }
  }
};

export const Mobile320x568 = () => <Skills />;
Mobile320x568.story = {
  parameters: {
    viewport: { defaultViewport: "iphone5" }
  }
};
