import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactResizeDetector from "react-resize-detector";
import Axios from "axios";
import PropTypes from "prop-types";
import { MODAL_HEADER_MENU } from "../constants";
import { hideModal } from "../redux/modal.actions";
import Routes from "./routes";

/**
 * Axios setup. Set function to transform request data into url encoded string.
 */
Axios.defaults.transformRequest = obj => {
  if (obj) {
    return Object.keys(obj)
      .map(p => `${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`)
      .join("&");
  }
  return [];
};
/**
 * Axios setup. Set ContentType for all POST requests
 */
Axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

/**
 * Main App component, is mounted on index.html.
 * @param {Object} props - Expected modalId from Redux.
 * @returns {Object} - BrowserRouter component that handles routing.
 */
const App = props => {
  /**
   * Closes mobile menu modal on browser resize.
   * @param {Number} width - Screen width
   * @param {Number} height - Screen height
   */
  const handleCloseOnResize = (width, height) => {
    if (props.modalId === MODAL_HEADER_MENU) {
      hideModal();
    }
  };

  return (
    <BrowserRouter>
      <ReactResizeDetector
        handleWidth
        handleHeight
        onResize={handleCloseOnResize}
      />
      <Routes />
    </BrowserRouter>
  );
};

App.propTypes = {
  modalId: PropTypes.string // Active modal id. Null if no modal visible.
};

const mapStateToProps = state => ({
  modalId: state.modal.modalId // Id of current opened modal
});

export default connect(mapStateToProps)(React.memo(App));
