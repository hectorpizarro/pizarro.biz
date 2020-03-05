import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

/**
 * Slides component, shown only on mobile (under 640px browser width)
 * @returns {Object} UL DOM node
 */
const MobileMenu = ({ goToSlide, experienceIds, experiences }) => {
  const getButton = experienceId => {
    const exp = experiences[experienceId];

    return (
      <button
        className="w-full text-left p-2 border rounded border-gray-300 bg-white shadow-sm"
        data-id={experienceId}
        onClick={goToSlide}
      >
        <div className="flex justify-between">
          <div>
            <span className="text-sm font-bold">{exp.company}</span>
            {exp.contractorCompany && (
              <span>{` (in ${exp.contractorCompany})`}</span>
            )}
          </div>
          <div>{`${exp.fromMonth} ${exp.fromYear}/${exp.toMonth} ${exp.toYear}`}</div>
        </div>

        <div className="role-and-country flex justify-between">
          <div>{exp.role}</div>
          <div>{`${exp.isInsite ? "Insite" : "Remotely"} - ${
            exp.country
          }`}</div>
        </div>
      </button>
    );
  };

  return (
    <ul className="text-xs">
      {experienceIds.map(experienceId => (
        <li key={experienceId} className="my-2">
          {getButton(experienceId)}
        </li>
      ))}
    </ul>
  );
};

MobileMenu.propTypes = {
  // Function moves slide to selected section
  goToSlide: PropTypes.func.isRequired,
  experienceIds: PropTypes.array.isRequired,
  experiences: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  experienceIds: state.experiences.allIds,
  experiences: state.experiences.byId
});

export default connect(mapStateToProps)(MobileMenu);
