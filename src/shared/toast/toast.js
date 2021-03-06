import React from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { fadeToast } from "./toast.slice";

const animShowToastAlert = keyframes`
from {
    transform: translateX(300px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const animHideToastAlert = keyframes`
from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(300px);
    opacity: 0;
  }
`;

const StyledToast = styled.div`
  pointer-events: none;
  position: fixed;
  z-index: 10;
  width: 100%;
  text-align: right;
  font-weight: 700;
  top: 0;
  right: 0px;
  animation: ${props => (props.fade ? animHideToastAlert : animShowToastAlert)}
    600ms ease-in both;
`;

const StyledButton = styled.button`
  display: inline-flex;
  pointer-events: auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  background-color: ${props =>
    props.isSuccess ? props.theme.color.blue500 : props.theme.color.red500};
  padding: ${props => {
    const { d2, d4 } = props.theme.size;
    return `${d2} ${d4} ${d2} ${d4}`;
  }};
`;

/**
 * Toast message component. Shown for a small amoun of time at top right.
 * @returns {Object} DIV DOM node
 */
export const InternalToast = ({ message, isSuccess, fade }) => {
  const dispatch = useDispatch();

  const handleClose = () => dispatch(fadeToast());

  // Don't render if there is no message
  if (message === "") {
    return null;
  }

  return (
    <StyledToast fade={fade}>
      <StyledButton title="close" onClick={handleClose} isSuccess={isSuccess}>
        {message}
      </StyledButton>
    </StyledToast>
  );
};

InternalToast.propTypes = {
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

export default connect(mapStateToProps)(InternalToast);
