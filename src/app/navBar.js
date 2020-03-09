import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PHOTO from "../shared/images/photo_small.jpg";
import { hideModal } from "../shared/modal/ducks";
import { PAGES } from "../shared/constants";

/**
 * Firt load animation keyframes
 */
const slideInLeftAnimation = keyframes`${slideInLeft}`;
/**
 * Page animation. Applied on component mount only for left column navbar,
 * Mobile menu has no animation.
 */
const StyledSection = styled.section`
  animation: ${props => (props.isLeft ? "1s" : "0s")} ${slideInLeftAnimation};
  display: ${props => (props.isLeft ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isLeft ? props.theme.color.gray900 : props.theme.color.gray100};
  color: ${props =>
    props.isLeft ? props.theme.color.gray400 : props.theme.color.gray500};
  font-size: ${props => props.theme.fontsize.sm};
`;

const StyledSectionLeft = styled(StyledSection)`
  overflow: auto;
  position: fixed;
  top: 0;
  height: 100%;
  @media (min-width: 640px) {
    display: flex;
    width: ${props => props.theme.size.d24};
    font-size: ${props => props.theme.fontsize.xs};
  }
  @media (min-width: 768px) {
    width: ${props => props.theme.size.d32};
    font-size: ${props => props.theme.fontsize.sm};
  }
  @media (min-width: 1024px) {
    width: ${props => props.theme.size.d40};
    font-size: ${props => props.theme.fontsize.base};
  }
`;

const StyledFigure = styled.figure`
  width: ${props =>
    props.isLeft ? props.theme.size.d20 : props.theme.size.d16};
  margin-bottom: ${props =>
    props.isLeft ? props.theme.size.d8 : props.theme.size.d4};
  @media (min-width: 768px) {
    width: ${props =>
      props.isLeft ? props.theme.size.d24 : props.theme.size.d16};
  }
  @media (min-width: 1024px) {
    width: ${props =>
      props.isLeft ? props.theme.size.d32 : props.theme.size.d16};
  }
`;

const StyledImage = styled.img`
  border: 4px solid ${props => props.theme.color.gray600};
  border-radius: 9999px;
`;

const StyledFigCaption = styled.figcaption`
  display: ${props => (props.isLeft ? "block" : "hidden")};
  color: white;
  text-align: center;
  margin-top: ${props => props.theme.size.d2};
  white-space: nowrap;
`;

const StyledNav = styled.nav`
  width: 100%;
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;

const StyledLi = styled.li`
  border-width: 8px;
  border-color: ${props =>
    props.isLeft ? props.theme.color.gray900 : props.theme.color.gray100};
`;

const StyledResumeWrap = styled.div`
  text-align: center;
  margin-top: ${props => props.theme.size.d10};
`;

const StyledResumeLink = styled.a`
  border: 1px solid black;
  border-radius: ${props => props.theme.size.d1};
  padding: ${props => props.theme.size.d1};
  background-color: ${props => props.theme.color.gray200};
  color: ${props => props.theme.color.gray700};
  transition-property: background-color, color;
  transition-duration: 500ms;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const StyledDownloadIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontsize.xl1};
  margin-right: ${props => props.theme.size.d2};
`;

const StyledResumeSpan = styled.span`
  font-size: ${props => props.theme.fontsize.sm};
`;

const StyledPageLink = styled(Link)`
  cursor: pointer;
  display: block;
  text-align: center;
  padding-bottom: ${props => props.theme.size.d2};
  border-bottom: 1px solid
    ${props =>
      props["data-isleft"]
        ? props.theme.color.gray900
        : props.theme.color.gray100};
  &:hover {
    border-bottom: 1px solid ${props => props.theme.color.red500};
    color: ${props =>
      props["data-isleft"] ? "white" : props.theme.color.gray900};
  }
  &.active {
    color: ${props =>
      props["data-isleft"] ? "yellow" : props.theme.color.red500};
    border-bottom: 1px solid ${props => props.theme.color.red500};
  }
`;

/**
 * Navigation bar shown on left side. Mobile shows it as a modal menu at top right.
 * @param {Object} props - Props
 * @returns {Object} HTML DOM section node.
 */
const NavBar = ({ isLeft, history, isInitRoute, hideModal }) => {
  /**
   * Clicking on any button bar hides modal. Used on mobile menu.
   * @param {Object} event - Click event
   */
  const handleClick = event => {
    if (!isLeft) {
      hideModal();
    }
  };

  /**
   * Applied only after App is first mounted, updates url based on current active page.
   * @param {String} to - Page id
   */
  const handleSetActive = to => {
    if (isInitRoute) {
      const myPage = PAGES.find(page => page.id === to);
      history.push(myPage.route);
    }
  };

  return (
    <StyledSection as={isLeft ? StyledSectionLeft : null} isLeft={isLeft}>
      <StyledFigure isLeft={isLeft}>
        <StyledImage src={PHOTO} alt="Hector Pizarro" />
        <StyledFigCaption isLeft={isLeft}>Hector Pizarro</StyledFigCaption>
      </StyledFigure>
      <StyledNav>
        <StyledUl>
          {PAGES.map(page => (
            <StyledLi key={page.id} isLeft={isLeft}>
              <StyledPageLink
                data-isleft={isLeft}
                activeClass="active"
                to={page.id}
                spy={true}
                onSetActive={handleSetActive}
                duration={1000}
                smooth="easeInOutQuad"
                onClick={handleClick}
              >
                {page.label}
              </StyledPageLink>
            </StyledLi>
          ))}
        </StyledUl>
        <StyledResumeWrap>
          <StyledResumeLink
            href={`${process.env.PUBLIC_URL}/hector-pizarro-resume.pdf`}
            download
          >
            <StyledDownloadIcon icon={faFileDownload} />
            <StyledResumeSpan>Resume</StyledResumeSpan>
          </StyledResumeLink>
        </StyledResumeWrap>
      </StyledNav>
    </StyledSection>
  );
};

NavBar.propTypes = {
  // Flag, show on left column if TRUE, otherwise show as a modal for mobile
  isLeft: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired, // Provided automatically by withRouter
  // From Redux, flag to update url to current selected page
  isInitRoute: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isInitRoute: state.app.initRoute
});

const mapDispatchToProps = {
  hideModal
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
