/**
 * Initial file for the SPA. Renders the React app inside the "#root" DOM node,
 * links Redux store and lazily loads the main App component.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./css/index.css";
import Loader from "./shared/loader/loader";
import styled, { ThemeProvider } from "styled-components";
import { THEME } from "./shared/constants";

const StyledLoaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledLoader = styled(Loader)`
  color: ${props => props.theme.color.gray500};
  height: ${props => props.theme.size.d16};
  width: ${props => props.theme.size.d16};
`;

/**
 * Component that will load App component lazily.
 */
const AppLazyLoader = React.lazy(() => import("./app/app"));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <React.Suspense
        fallback={
          <StyledLoaderWrap>
            <StyledLoader />
          </StyledLoaderWrap>
        }
      >
        <AppLazyLoader />
      </React.Suspense>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
