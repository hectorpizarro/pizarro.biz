import React from "react";
import PropTypes from "prop-types";
import Loader from "./loader/loader";

/**
 * Button component.
 * @param {Object} props - Props
 * @returns {Object} button DOM node.
 */
const Button = props => {
  const getMyClasses = () => {
    const classes = ["py-2 border rounded px-8"];
    if (props.inverse) {
      classes.push("bg-white");
      if (props.disabled) {
        classes.push("text-gray-300 border-gray-300 cursor-default");
      } else {
        classes.push(
          "text-gray-700 border-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors transition-500"
        );
      }
    } else {
      classes.push("text-white");
      if (props.disabled) {
        classes.push("border-gray-300 bg-gray-300 cursor-default");
      } else {
        classes.push(
          "border-transparent bg-gray-900 hover:text-gray-900 hover:border-gray-900 hover:bg-white transition-colors transition-500"
        );
      }
    }
    return classes.join(" ");
  };

  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={getMyClasses()}
    >
      {props.disabled ? <Loader forButton /> : props.label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired, // Label
  type: PropTypes.string, // 'submit', 'reset', 'button'
  disabled: PropTypes.bool, // Flag to disable button
  inverse: PropTypes.bool, // Secondary button colors
  onSubmit: PropTypes.func // Function executed on button click
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  inverse: false,
  onSubmit: () => {}
};

export default React.memo(Button);
