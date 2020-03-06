import React from "react";
import { PAGE_HOME } from "../../shared/constants";
import { Element } from "react-scroll";
import PageLoader from "../../shared/loader/page-loader";
import styled from "styled-components";

const ElementWrap = styled(Element)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

function HomeLoader() {
  return (
    <ElementWrap name={PAGE_HOME}>
      <PageLoader />
    </ElementWrap>
  );
}

export default HomeLoader;