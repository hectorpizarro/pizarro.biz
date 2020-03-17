/**
 * Initial file for the SPA. Renders the React app inside the "#root" DOM node,
 * links Redux store and lazily loads the main App component.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import store from "./store";
import Loader from "./shared/loader/loader";
import { THEME } from "./shared/constants";

// import "normalize.css/normalize.css";
import "./index.css"; // global CSS rules

const StyledLoaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: "Lato", sans-serif;
  }

  /* Remove outline for all buttons */
  button:focus {
    outline: 0;
  }

  /* React modal background overlay */
  .modal-overlay {
    opacity: 0;
    transition: opacity 600ms ease-in-out;
    background-color: rgb(26, 32, 44, 0.5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* React modal content */
  .modal-content {
    max-height: 90%;
    position: absolute;
    outline: 0;
    border-radius: ${props => props.theme.size.d1};
    box-shadow: ${props => props.theme.boxShadow};;
    overflow-y: auto;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    width: ${props => props.theme.size.d32};
    @media (min-width: 640px) {
        width: 84%;
    }
  }

  .modal-content-menu {
    background-color: ${props => props.theme.color.gray100};
    top: 0;
    right: 0;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }
  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;

/**
 * Component that will load App component lazily.
 */
const AppLazyLoader = React.lazy(() => import("./app/app"));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <React.Suspense
        fallback={
          <StyledLoaderWrap>
            <Loader />
          </StyledLoaderWrap>
        }
      >
        <AppLazyLoader />
      </React.Suspense>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
