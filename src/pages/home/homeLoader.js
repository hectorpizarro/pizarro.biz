import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { PAGE_HOME } from "../../shared/constants";
import PageLoader from "../../shared/loader/pageLoader";

const StyledHomeLoader = styled(Element)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

function HomeLoader() {
  return (
    <StyledHomeLoader name={PAGE_HOME}>
      <PageLoader />
    </StyledHomeLoader>
  );
}

export default HomeLoader;
