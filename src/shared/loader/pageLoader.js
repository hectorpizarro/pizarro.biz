import React from "react";
import styled from "styled-components";
import Loader from "./loader";

const StyledPageLoader = styled.div`
  display: flex;
  height: 95vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

/**
 * Loader component shown before loading a page.
 * @returns {Object} DIV DOM node, uses whole screen.
 */
const PageLoader = () => (
  <StyledPageLoader>
    <Loader />
  </StyledPageLoader>
);

export default PageLoader;
