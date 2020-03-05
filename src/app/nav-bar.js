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
const NavBarContent = styled.section`
  animation: ${props => (props.isLeft ? "2s" : "0s")} ${slideInLeftAnimation};
`;

/**
 * Navigation bar shown on left side. Mobile shows it as a modal menu at top right.
 * @param {Object} props - Props
 * @returns {Object} HTML DOM section node.
 */
const NavBar = props => {
  /**
   * Clicking on any button bar hides modal. Used on mobile menu.
   * @param {Object} event - Click event
   */
  const handleClick = event => {
    if (!props.isLeft) {
      props.hideModal();
    }
  };

  /**
   * CSS classes to apply for left bar or mobile menu.
   */
  const classes = props.isLeft
    ? {
        section:
          "hidden sm:flex flex-col justify-center items-center bg-gray-900 text-gray-400 overflow-auto fixed top-0 h-full sm:w-24 md:w-32 lg:w-40 sm:text-xs md:text-sm lg:text-base",
        figure: "w-20 md:w-24 lg:32 mb-8",
        figCaption: "text-white text-center mt-2 whitespace-no-wrap",
        li: "border-8 border-gray-900"
      }
    : {
        section:
          "flex flex-col justify-center items-center bg-gray-100 text-gray-500 text-sm",
        figure: "w-16 mb-4",
        figCaption: "hidden",
        li: "border-8 border-gray-100"
      };

  /**
   * Applied only after App is first mounted, updates url based on current active page.
   * @param {String} to - Page id
   */
  const handleSetActive = to => {
    if (props.isInitRoute) {
      const myPage = PAGES.find(page => page.id === to);
      props.history.push(myPage.route);
    }
  };

  return (
    <NavBarContent isLeft={props.isLeft} className={classes.section}>
      <figure className={classes.figure}>
        <img
          src={PHOTO}
          alt="Hector Pizarro"
          className="border-4 border-gray-600 rounded-full"
        />
        <figcaption className={classes.figCaption}>Hector Pizarro</figcaption>
      </figure>
      <nav className="container">
        <ul className="list-none">
          {PAGES.map(page => (
            <li key={page.id} className={classes.li}>
              <Link
                className={`cursor-pointer block text-center pb-2 border-b transition-colors transition-500 hover:border-red-500 ${
                  props.isLeft
                    ? "border-gray-900 hover:text-white"
                    : "border-gray-100 hover:text-gray-900"
                }`}
                activeClass="active text-white border-red-500"
                to={page.id}
                spy={true}
                onSetActive={handleSetActive}
                duration={1000}
                smooth="easeInOutQuad"
                onClick={handleClick}
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-center mt-10">
          <a
            href={`${process.env.PUBLIC_URL}/hector-pizarro-resume.pdf`}
            download
            className="border rounded px-1 py-1 bg-gray-200 hover:bg-white text-gray-700 hover:text-black transition-colors transition-500"
          >
            <FontAwesomeIcon icon={faFileDownload} className="text-1xl mr-2" />
            <span className="text-sm">Resume</span>
          </a>
        </div>
      </nav>
    </NavBarContent>
  );
};

NavBar.propTypes = {
  // Flag, show on left column if TRUE, otherwise show as a modal for mobile
  isLeft: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired, // Provided automatically by withRouter
  // From Redux, flag to update url to current selected page
  isInitRoute: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isInitRoute: state.app.initRoute
});

const mapDispatchToProps = {
  hideModal
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
