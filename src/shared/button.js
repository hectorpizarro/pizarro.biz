import React from "react";
import PropTypes from "prop-types";

const buttonClasses =
  "text-white bg-gray-900 hover:bg-white border-transparent";
const buttonClassesInverted = "text-gray-700 bg-white border-gray-500";

const Button = props => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={`py-2 border rounded px-8 hover:text-gray-900 hover:border-gray-900 transition-colors transition-500 ${
        props.inverse ? buttonClassesInverted : buttonClasses
      }`}
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
