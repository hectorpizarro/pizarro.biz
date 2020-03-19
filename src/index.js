/**
 * Initial file for the SPA. Renders the React app inside the "#root" DOM node,
 * links Redux store and lazily loads the main App component.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./store";
import Loader from "./shared/loader/loader";
import { THEME, LOADER_APP } from "./shared/constants";

// import "normalize.css/normalize.css";
import GlobalStyle from "./globalStyle";
import "./index.css"; // global CSS rules

/**
 * Component that will load App component lazily.
 */
const AppLazyLoader = React.lazy(() => import("./app/app"));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <React.Suspense fallback={<Loader type={LOADER_APP} />}>
        <AppLazyLoader />
      </React.Suspense>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
