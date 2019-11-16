import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactResizeDetector from "react-resize-detector";
import Axios from "axios";
import { MODAL_HEADER_MENU } from "./constants";
import { hideModal, setScreenSize } from "./redux/actions";
import AppRoutes from "./app-routes";

Axios.defaults.transformRequest = obj => {
  if (obj) {
    return Object.keys(obj)
      .map(p => `${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`)
      .join("&");
  }
  return [];
};
Axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const App = props => {
  const handleCloseOnResize = (width, height) => {
    setScreenSize({ width, height });
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
      <AppRoutes />
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  modalId: state.modalId
});

export default connect(mapStateToProps)(App);
