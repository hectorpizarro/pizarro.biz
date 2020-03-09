import React from "react";
import Loader from "./loader";
import styled from "styled-components";

const StyledPageLoader = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledLoader = styled(Loader)`
  color: ${props => props.theme.color.gray500};
  width: ${props => props.theme.size.d16};
  height: ${props => props.theme.size.d16};
`;

/**
 * Loader component shown before loading a page.
 * @returns {Object} DIV DOM node, uses whole screen.
 */
const PageLoader = () => {
  return (
    <StyledPageLoader>
      <StyledLoader />
    </StyledPageLoader>
  );
};

export default React.memo(PageLoader);
