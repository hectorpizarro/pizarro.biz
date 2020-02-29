import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import AppService from "../app-service";
import { showModal } from "../shared/modal/ducks";
import { MODAL_EXPERIENCE } from "../constants";

/**
 * Content to show if browser is over 640px width.
 * @param {Object} props - Props
 * @returns {Object} DIV DOM node.
 */
const Desktop = props => {
  /**
   * Set experience id to Redux and show modal with experience detail.
   * @param {Object} event - Click event
   */
  const showExperienceDetail = event => {
    const expId = AppService.getClickId(event);
    props.showModal({ id: MODAL_EXPERIENCE, data: `${expId}` });
  };

  return (
    <div className="hidden sm:block">
      <div className="experience-desktop-grid text-xs screen730:text-sm lg:text-base">
        {props.experiences.map((exp, idx) => (
          <div
            key={idx}
            className="w-full border rounded border-gray-400 bg-gray-100 text-left cursor-pointer relative transition-colors transition-500 shadow-lg hover:border-gray-600 hover:bg-white"
            data-id={exp.id}
            onClick={showExperienceDetail}
          >
            <div className="px-2 pt-2">
              <div className="flex justify-between">
                <div>
                  <span className="text-sm md:text-md lg:text-base font-bold">
                    {exp.company}
                  </span>
                </div>
                <div className="hidden screen960:block">{`${
                  exp.isInsite ? "Insite" : "Remotely"
                } - ${exp.country}`}</div>
                <div className="block screen960:hidden">{exp.country}</div>
              </div>
              <div className="flex justify-between">
                <div className="block screen960:hidden"></div>
                <div className="hidden screen960:block text-sm">
                  {exp.contractorCompany && (
                    <span>{` (in ${exp.contractorCompany})`}</span>
                  )}
                </div>
                <div className="text-sm">{`${exp.fromMonth} ${exp.fromYear}/${exp.toMonth} ${exp.toYear}`}</div>
              </div>
            </div>
            <div className="border-t border-gray-300 px-2 py-1 mt-1">
              <FontAwesomeIcon
                icon={faUserNinja}
                className="text-1xl text-gray-500 mr-2"
              />
              <span>{exp.role}</span>
            </div>
            <div className="row-description-short border-t border-gray-300 text-justify px-2 pt-1 pb-4">
              {exp.descriptionShort}
            </div>
            <a
              href="/#"
              onClick={AppService.noop}
              className="absolute right-0 bottom-0 mr-1 mb-1 text-xs text-red-500"
            >
              more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

Desktop.propTypes = {
  experiences: PropTypes.array.isRequired // Experiences array from JSON
};

const mapStateToProps = state => ({
  experiences: state.misc.experiences // Experiences array stored in Redux
});

const mapDispatchToProps = {
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);
