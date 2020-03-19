import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";
import Footer from "../../app/footer/footer";
import {
  PAGE_ABOUT,
  PAGE_SKILLS,
  PAGE_EXPERIENCE,
  PAGE_CONTACT,
  LOADER_PAGE,
  PAGE_HOME
} from "../constants";
import Loader from "../loader/loader";
import BG_HOME from "../images/home.png";

// Initial animation keyframes
// const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledPageWrapper = styled(Element)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const StyledPage = styled(StyledPageWrapper)`
  background-color: ${props =>
    props.name === PAGE_SKILLS ? props.theme.color.gray100 : undefined};
`;

export const StyledHome = styled(StyledPageWrapper)`
  align-items: center;
  justify-content: center;
  background-image: url(${BG_HOME});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  animation: 2s ${fadeInAnimation};
`;

// Styled to animate at component initial mount
export const StyledPageSection = styled.section`
  animation: 1s ${fadeInAnimation} ease-in;
  padding: ${props => props.theme.size.d4};
  height: 100%;

  @media (min-width: 640px) {
    padding: ${props =>
      `${props.theme.size.d4}px ${props.theme.size.d8}px ${props.theme.size.d4}px ${props.theme.size.d8}px`};
  }
`;

export const StyledTitleWrap = styled.div`
  margin-bottom: ${props => props.theme.size.d4};
`;

export const StyledTitle = styled.h1`
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
  /**
   * Store to state background image src once it's cached and loaded.
   */
  const [bgImage, setBgImage] = useState("");
  // Executed on component mount. If page loading is home, load first bg image
  useEffect(() => {
    if (name === PAGE_HOME) {
      const img = document.createElement("IMG");
      // Image loaded, store src to state and delete image object
      img.addEventListener("load", () => {
        setBgImage(BG_HOME);
        img.remove();
      });
      img.src = BG_HOME;
    }
  }, []);

  // Component to load page content lazily.
  let LazyComponent = null;
  switch (name) {
    case PAGE_HOME: {
      LazyComponent = React.lazy(() => import("../../pages/home/home"));
      if (bgImage) {
        // Image was loaded and cached, animate and show page
        return (
          <StyledHome name={PAGE_HOME}>
            <React.Suspense fallback={<div />}>
              <LazyComponent />
            </React.Suspense>
          </StyledHome>
        );
      }

      // Waiting for background image load, show loader.
      return <Loader type={LOADER_PAGE} />;
    }
    case PAGE_ABOUT:
      LazyComponent = React.lazy(() => import("../../pages/about/about"));
      break;
    case PAGE_SKILLS:
      LazyComponent = React.lazy(() => import("../../pages/skills/skills"));
      break;
    case PAGE_EXPERIENCE:
      LazyComponent = React.lazy(() =>
        import("../../pages/experience/experience")
      );
      break;
    case PAGE_CONTACT:
      LazyComponent = React.lazy(() => import("../../pages/contact/contact"));
      break;
    default:
      // If page unknown return null to avoid rendering
      return null;
  }

  return (
    <StyledPage name={name} className={className}>
      <React.Suspense fallback={<Loader type={LOADER_PAGE} />}>
        <StyledPageSection>
          {title && (
            <StyledTitleWrap>
              <StyledTitle>{title}</StyledTitle>
            </StyledTitleWrap>
          )}
          <LazyComponent />
        </StyledPageSection>
        {withFooter && <Footer />}
      </React.Suspense>
    </StyledPage>
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
