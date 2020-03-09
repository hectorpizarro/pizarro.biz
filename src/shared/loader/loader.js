import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const ldsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ldsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`;

const ldsEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.forButton ? undefined : props.theme.color.gray500)};
  width: ${props => (props.forButton ? undefined : props.theme.size.d16)};
  height: ${props => (props.forButton ? undefined : props.theme.size.d16)};
`;

const StyledEllipsis = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: ${props => (props.forButton ? "24px" : "64px")};

  & div:nth-child(1) {
    left: 6px;
    animation: ${ldsEllipsis1} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 6px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 26px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 45px;
    animation: ${ldsEllipsis3} 0.6s infinite;
  }
`;

const StyledStep = styled.div`
  position: absolute;
  top: ${props => (props.forButton ? "6px" : "27px")};
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${props =>
    props.forButton
      ? props.inverse
        ? props.theme.color.gray300
        : "white"
      : props.theme.color.gray500};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

/**
 * Loader component. Can also be shown inside buttons.
 */
const Loader = ({ forButton, inverse }) => (
  <StyledLoader forButton={forButton}>
    <StyledEllipsis forButton={forButton}>
      <StyledStep forButton={forButton} inverse={inverse} />
      <StyledStep forButton={forButton} inverse={inverse} />
      <StyledStep forButton={forButton} inverse={inverse} />
      <StyledStep forButton={forButton} inverse={inverse} />
    </StyledEllipsis>
  </StyledLoader>
);

Loader.propTypes = {
  // if TRUE render small version to show inside button
  forButton: PropTypes.bool,
  inverse: PropTypes.bool
};

Loader.defaultProps = {
  forButton: false, //By default show big version
  inverse: false
};

export default React.memo(Loader);
