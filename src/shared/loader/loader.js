import React from "react";
import PropTypes from "prop-types";
import "./loader.css";

const Loader = props => (
  <div
    className={`flex items-center justify-center w-full ${
      props.forButton ? "" : "h-40"
    }`}
  >
    <div className={`lds-ellipsis ${props.forButton ? "forButton" : ""}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

Loader.propTypes = {
  forButton: PropTypes.bool
};

Loader.defaultProps = {
  forButton: false
};

export default React.memo(Loader);
