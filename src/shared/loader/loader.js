import React from "react";
import PropTypes from "prop-types";
import "./loader.css";
/**
 * Loader component. Can also be shown inside buttons.
 */
const Loader = ({ forButton }) => (
  <div
    className={`flex items-center justify-center w-full ${
      forButton ? "" : "h-40"
    }`}
  >
    <div className={`lds-ellipsis ${forButton ? "forButton" : ""}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

Loader.propTypes = {
  // if TRUE render small version to show inside button
  forButton: PropTypes.bool
};

Loader.defaultProps = {
  forButton: false //By default show big version
};

export default React.memo(Loader);
