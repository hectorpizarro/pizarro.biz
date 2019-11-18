import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

/**
 * Slides component, shown only on mobile (under 640px browser width)
 * @param {Object} props - Props
 * @returns {Object} UL DOM node
 */
const MobileMenu = props => {
  return (
    <ul className="text-xs">
      {props.experiences &&
        props.experiences.map((exp, idx) => (
          <li key={idx} className="my-2">
            <button
              className="w-full text-left p-2 border rounded border-gray-300 bg-white shadow-sm"
              data-id={idx}
              onClick={props.goToSlide}
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
          </li>
        ))}
    </ul>
  );
};

MobileMenu.propTypes = {
  // Function moves slide to selected section
  goToSlide: PropTypes.func.isRequired,
  experiences: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  experiences: state.misc.experiences // Experiences list, loaded from JSON
});

export default connect(mapStateToProps)(MobileMenu);
