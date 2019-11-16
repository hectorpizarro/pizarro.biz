import React from "react";
import PropTypes from "prop-types";

const Alert = props => {
  if (!props.message) {
    return null;
  }

  const handleClose = () => setTimeout(props.onRemoveAlert, 400);

  if (props.message) {
    setTimeout(props.onRemoveAlert, 3000); // remove message after 3 sec
  }

  return (
    <div className="alert-banner">
      <input
        type="checkbox"
        className="hidden"
        id="banneralert"
        onChange={handleClose}
      />
      <label
        className={`close cursor-pointer flex items-center justify-between w-full p-2 shadow text-white ${
          props.isError ? "bg-red-500" : "bg-blue-500"
        }`}
        title="close"
        htmlFor="banneralert"
      >
        {props.message}
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </label>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  onRemoveAlert: PropTypes.func.isRequired
};

export default Alert;
