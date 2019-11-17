import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserNinja,
  faLaptopCode,
  faIndustry,
  faCogs
} from "@fortawesome/free-solid-svg-icons";

const Card = props => {
  return (
    <div className="border rounded bg-white text-xs sm:text-base">
      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-2 sm:py-4">
        {/* Head Row 1: company, country */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="font-bold text-xs sm:text-xl">
              {props.experience.company}
            </div>
            {props.experience.contractorCompany && (
              <span className="ml-1">
                (in {props.experience.contractorCompany})
              </span>
            )}
          </div>
          <div className="flex items-center">
            <span className="text-xs hidden sm:block">
              {props.experience.isInsite ? "Insite" : "Remotely"}
            </span>
            <span className="mx-2 hidden sm:block">-</span>
            <span>{props.experience.country}</span>
          </div>
        </div>
        {/* Head Row 2: role, dates */}
        <div className="flex items-center justify-between">
          <div>
            <FontAwesomeIcon
              icon={faUserNinja}
              className="text-1xl text-gray-500 mr-2"
            />
            <span>{props.experience.role}</span>
          </div>
          <div>
            <span className="text-xs mr-3 hidden sm:inline">
              ({props.experience.timeDescription})
            </span>
            <span>{`${props.experience.fromMonth} ${props.experience.fromYear} - ${props.experience.toMonth} ${props.experience.toYear}`}</span>
          </div>
        </div>
      </div>
      {/* Body description */}
      <div className="border-b border-gray-200 px-4 pt-2 sm:pt-4 pb-0 sm:pb-2">
        {props.experience.description.map((parr, idxParr) => (
          <p key={idxParr} className="pb-2 text-justify">
            {parr}
          </p>
        ))}
      </div>
      {/* Body Tech */}
      <div className="experience-tech-grid px-4 py-2 sm:py-4">
        {props.experience.tech_dev && (
          <React.Fragment>
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="text-1xl mr-2 mt-1 text-gray-700"
            />
            <div className="font-bold text-gray-700 text-right hidden sm:block">
              Dev:
            </div>
            <div>{props.experience.tech_dev}</div>
          </React.Fragment>
        )}
        {props.experience.tech_build && (
          <React.Fragment>
            <FontAwesomeIcon
              icon={faIndustry}
              className="text-1xl mr-2 mt-1 text-gray-700"
            />
            <div className="font-bold text-gray-700 text-right hidden sm:block">
              Build:
            </div>
            <div>{props.experience.tech_build}</div>
          </React.Fragment>
        )}
        {props.experience.tech_test && (
          <React.Fragment>
            <FontAwesomeIcon
              icon={faCogs}
              className="text-1xl mr-2 mt-1 text-gray-700"
            />
            <div className="font-bold text-gray-700 text-right hidden sm:block">
              Test:
            </div>
            <div>{props.experience.tech_test}</div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  experience: PropTypes.object.isRequired
};

export default React.memo(Card);
