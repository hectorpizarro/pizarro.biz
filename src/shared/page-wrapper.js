import React from "react";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import PageLoader from "./loader/page-loader";
import Footer from "../app/footer";
import { PAGE_ABOUT, PAGE_SKILLS, PAGE_CONTACT } from "../constants";

// Initial animation keyframes
const fadeInAnimation = keyframes`${fadeIn}`;
// Styled to animate at component initial mount
const Content = styled.section`
  animation: 2s ${fadeInAnimation};
`;

/**
 * Wrapper to load the following pages: About, Skills, Contact.
 * Wrapper provides title, lazy loads page component and animates loading.
 * @param {Object} props - Props
 */
const PageWrapper = props => {
  // Component to load page content lazily.
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
      // If page unknown return null to avoid rendering
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
  name: PropTypes.string.isRequired, // Element name, required for react-scroll
  className: PropTypes.string, // Optional, additional CSS class names
  title: PropTypes.string, // Optional, shows title at page top
  withFooter: PropTypes.bool // Optional, show footer at page bottom
};

PageWrapper.defaultProps = {
  className: "",
  withFooter: false
};

export default React.memo(PageWrapper);
