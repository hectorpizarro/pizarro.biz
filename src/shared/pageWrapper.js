import React from "react";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import PageLoader from "./loader/pageLoader";
import Footer from "../app/footer";
import {
  PAGE_ABOUT,
  PAGE_SKILLS,
  PAGE_EXPERIENCE,
  PAGE_CONTACT
} from "./constants";

// Initial animation keyframes
const fadeInAnimation = keyframes`${fadeIn}`;

// Styled to animate at component initial mount
const StyledSection = styled.section`
  animation: 2s ${fadeInAnimation};
  padding: ${props => props.theme.size.d4};

  @media (min-width: 640px) {
    padding: ${props =>
      `${props.theme.size.d4}px ${props.theme.size.d8}px ${props.theme.size.d4}px ${props.theme.size.d8}px`};
    height: 100%;
  }
`;

const StyledElement = styled(Element)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const StyledTitleWrap = styled.div`
  margin-bottom: ${props => props.theme.size.d4};
`;

const StyledTitle = styled.h1`
  font-weight: 700;
  @media (min-width: 640px) {
    font-size: ${props => props.theme.fontsize.xl2};
  }
`;

/**
 * Wrapper to load the following pages: About, Skills, Contact.
 * Wrapper provides title, lazy loads page component and animates loading.
 */
const PageWrapper = ({ name, title, className, withFooter }) => {
  // Component to load page content lazily.
  let LazyComponent = null;
  switch (name) {
    case PAGE_ABOUT:
      LazyComponent = React.lazy(() => import("../pages/about/about"));
      break;
    case PAGE_SKILLS:
      LazyComponent = React.lazy(() => import("../pages/skills/skills"));
      break;
    case PAGE_EXPERIENCE:
      LazyComponent = React.lazy(() =>
        import("../pages/experience/experience")
      );
      break;
    case PAGE_CONTACT:
      LazyComponent = React.lazy(() => import("../pages/contact/contact"));
      break;
    default:
      // If page unknown return null to avoid rendering
      return null;
  }

  return (
    <StyledElement name={name} className={className}>
      <React.Suspense fallback={<PageLoader />}>
        <StyledSection>
          {title && (
            <StyledTitleWrap>
              <StyledTitle>{title}</StyledTitle>
            </StyledTitleWrap>
          )}
          <LazyComponent />
        </StyledSection>
        {withFooter && <Footer />}
      </React.Suspense>
    </StyledElement>
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
  title: "",
  withFooter: false
};

export default React.memo(PageWrapper);
