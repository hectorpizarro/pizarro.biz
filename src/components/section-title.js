import React from "react";
import PropTypes from "prop-types";

const SectionTitle = props => {
  return (
    <div className="mb-4">
      <h1 className="font-bold sm:text-2xl">{props.title}</h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default React.memo(SectionTitle);
