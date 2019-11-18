import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./toast.css";
import { fadeToast } from "../../redux/toast.actions";
/**
 * Toast message component. Shown for a small amoun of time at top right.
 * @param {Object} props - Props
 * @returns {Object} DIV DOM node
 */
const Toast = props => {
  // Don't render if there is no message
  if (props.message === "") {
    return null;
  }

  return (
    <div
      className={`toast pointer-events-none fixed z-10 w-full text-right font-bold ${
        props.fade ? "fadeMe" : ""
      }`}
    >
      <button
        className={`inline-flex pointer-events-auto items-center justify-center close cursor-pointer px-4 py-2 text-white ${
          props.isSuccess ? "bg-blue-500" : "bg-red-500"
        }`}
        title="close"
        onClick={fadeToast}
      >
        {props.message}
      </button>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired, // Message to show. Hide toast if ""
  // Toggles background color: Blue if TRUE, otherwise red.
  isSuccess: PropTypes.bool.isRequired,
  fade: PropTypes.bool.isRequired // Flag to fade toast before hiding it
};

const mapStateToProps = state => ({
  message: state.toast.message,
  isSuccess: state.toast.isSuccess,
  fade: state.toast.fade
});

export default connect(mapStateToProps)(Toast);
