/**
 * Initial file for the SPA. Renders the React app inside the "#root" DOM node,
 * links Redux store and lazily loads the main App component.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./store";
import { THEME } from "./shared/constants";
import App from "./app/app";
// import "normalize.css/normalize.css";
import GlobalStyle from "./globalStyle";
import "./index.css"; // global CSS rules

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
