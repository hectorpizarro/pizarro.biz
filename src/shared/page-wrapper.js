import React from "react";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import PageLoader from "./loader/page-loader";
import Footer from "../app/footer";
import { PAGE_ABOUT, PAGE_SKILLS, PAGE_CONTACT } from "../constants";

const fadeInAnimation = keyframes`${fadeIn}`;
const Content = styled.section`
  animation: 2s ${fadeInAnimation};
`;
const PageWrapper = props => {
  let LazyComponent = null;
  switch (props.name) {
    case PAGE_ABOUT:
      LazyComponent = React.lazy(() => import("../about/about"));
      break;
    case PAGE_SKILLS:
      LazyComponent = React.lazy(() => import("../skills/skills"));
      break;
    case PAGE_CONTACT:
      LazyComponent = React.lazy(() => import("../contact/contact"));
      break;
    default:
      return null;
  }

  return (
    <Element
      name={props.name}
      className={`flex flex-col h-screen w-full ${props.className}`}
    >
      <React.Suspense fallback={<PageLoader />}>
        <Content className="py-4 px-4 sm:px-8 h-full">
          {props.title && (
            <div className="mb-4">
              <h1 className="font-bold sm:text-2xl">{props.title}</h1>
            </div>
          )}
          <LazyComponent />
        </Content>
        {props.withFooter && <Footer />}
      </React.Suspense>
    </Element>
  );
};

PageWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  withFooter: PropTypes.bool
};

PageWrapper.defaultProps = {
  className: "",
  withFooter: false
};

export default React.memo(PageWrapper);
