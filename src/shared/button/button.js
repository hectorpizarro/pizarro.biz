import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../loader/loader";
import AppService from "../appService";

const StyledButton = styled.button`
  padding: ${props => {
    const { d2, d3, d8 } = props.theme.size;
    if (props.disabled) {
      return `${d2} ${d3} ${d2} ${d3}`;
    }
    return `${d2} ${d8} ${d2} ${d8}`;
  }};
  border-radius: ${props => props.theme.size.d1};
  border: 1px solid transparent;
  height: ${props => props.theme.size.d10};
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  transition-property: color, border-color, background-color;
  transition-duration: 500ms;
`;

const StyledButtonInverse = styled(StyledButton)`
  color: ${props =>
    props.disabled ? props.theme.color.gray300 : props.theme.color.gray700};
  border-color: ${props =>
    props.disabled ? props.theme.color.gray300 : props.theme.color.gray500};
  background-color: white;
  &:hover {
    color: ${props => (props.disabled ? undefined : "black")};
    border-color: ${props => (props.disabled ? undefined : "black")};
  }
`;

const StyledButtonDefault = styled(StyledButton)`
  color: white;
  border-color: ${props =>
    props.disabled ? props.theme.color.gray300 : "transparent"};
  background-color: ${props =>
    props.disabled ? props.theme.color.gray300 : props.theme.color.gray900};
  &:hover {
    background-color: ${props => (props.disabled ? undefined : "white")};
    color: ${props => (props.disabled ? undefined : props.theme.color.gray900)};
    border-color: ${props =>
      props.disabled ? undefined : props.theme.color.gray900};
  }
`;

/**
 * Button component.
 * @param {Object} props - Props
 * @returns {Object} button DOM node.
 */
const Button = ({ label, type, disabled, inverse, onClick }) => {
  const handleClick = event => {
    if (type === "submit" && disabled) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
    onClick(event);
  };

  return (
    <StyledButton
      type={type}
      disabled={disabled}
      inverse={inverse}
      onClick={handleClick}
      as={inverse ? StyledButtonInverse : StyledButtonDefault}
    >
      {disabled ? <Loader forButton inverse={inverse} /> : label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired, // Label
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  disabled: PropTypes.bool, // Flag to disable button
  inverse: PropTypes.bool, // Secondary button colors
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  inverse: false,
  onClick: AppService.noop
};

export default React.memo(Button);
