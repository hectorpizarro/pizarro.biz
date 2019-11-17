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
import AppService from "../app-service";
import { hideModal } from "../redux/modal.actions";

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const NavBarContent = styled.section`
  animation: ${props => (props.isLeft ? "2s" : "0s")} ${slideInLeftAnimation};
`;

const NavBar = props => {
  const handleClick = event => {
    if (!props.isLeft) {
      hideModal();
    }
  };

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

  const handleSetActive = to => {
    if (props.isInitRoute) {
      const myPage = AppService.pages.find(page => page.id === to);
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
          {AppService.pages.map(page => (
            <li key={page.id} className={classes.li}>
              <Link
                className={`navButton ${
                  props.isLeft ? "navButtonLeft" : "navButtonMobile"
                }`}
                activeClass="active"
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
  isLeft: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired // Provided automatically by withRouter
};

const mapStateToProps = state => ({
  isInitRoute: state.misc.initRoute
});

export default connect(mapStateToProps)(withRouter(NavBar));
