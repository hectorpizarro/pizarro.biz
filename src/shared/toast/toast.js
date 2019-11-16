import React from "react";
import { connect } from "react-redux";
import "./toast.css";
import { fadeToast } from "../../redux/toast.actions";

const Toast = props => {
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

const mapStateToProps = state => ({
  message: state.toast.message,
  isSuccess: state.toast.isSuccess,
  fade: state.toast.fade
});

export default connect(mapStateToProps)(Toast);
