import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactResizeDetector from "react-resize-detector";
import Axios from "axios";
import PropTypes from "prop-types";
import Analytics from "react-router-ga";
import {
  MODAL_HEADER_MENU,
  MODAL_EXPERIENCE,
  GOOGLE_ANALYTICS_KEY
} from "../shared/constants";
import { hideModal } from "../shared/appModal/appModal.slice";
import Routes from "./app.routes";

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
 * @returns {Object} - BrowserRouter component that handles routing.
 */
const App = ({ modalId, propHideModal }) => {
  /**
   * Closes mobile menu modal on browser resize.
   * @param {Number} width - Screen width
   * @param {Number} height - Screen height
   */
  const handleCloseOnResize = () => {
    if ([MODAL_HEADER_MENU, MODAL_EXPERIENCE].includes(modalId)) {
      propHideModal();
    }
  };

  return (
    <BrowserRouter>
      <ReactResizeDetector
        handleWidth
        handleHeight
        onResize={handleCloseOnResize}
      />
      {GOOGLE_ANALYTICS_KEY ? (
        <Analytics id={GOOGLE_ANALYTICS_KEY}>
          <Routes />
        </Analytics>
      ) : (
        <Routes />
      )}
    </BrowserRouter>
  );
};

App.propTypes = {
  modalId: PropTypes.string, // Active modal id. Null if no modal visible.
  propHideModal: PropTypes.func.isRequired // Function to hide modal
};

App.defaultProps = {
  modalId: null
};

const mapStateToProps = state => ({
  modalId: state.modal.modalId // Id of current opened modal
});

const mapDispatchToProps = {
  propHideModal: hideModal
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
