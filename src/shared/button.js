import React from "react";
import PropTypes from "prop-types";

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
      {props.label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
  onSubmit: PropTypes.func
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  inverse: false,
  onSubmit: () => {}
};

export default React.memo(Button);
