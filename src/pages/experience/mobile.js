import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import PropTypes from "prop-types";
import MobileMenu from "./mobile-menu";
import Card from "./card";
import AppService from "../../shared/app-service";
import { SLIDER_SETTINGS } from "../../shared/constants";

const Mobile = ({ experienceIds, experiences }) => {
  let sliderRef = null; // Reference to DOM node

  /**
   * Store reference to DOM node. Required for slide functionality.
   * @param {Object} ref DOM node
   */
  const setSliderRef = ref => (sliderRef = ref);

  /**
   * Moves slide to selected section
   * @param {Object} event - Click event
   */
  const goToSlide = event => {
    const experienceId = AppService.getClickId(event);
    const idx = experienceIds.findIndex(el => el === experienceId);
    sliderRef.slickGoTo(idx + 1);
  };

  return (
    <div className="block sm:hidden -mt-4">
      <Slider ref={setSliderRef} {...SLIDER_SETTINGS}>
        <MobileMenu goToSlide={goToSlide} />
        {experienceIds.map(experienceId => (
          <Card key={experienceId} experience={experiences[experienceId]} />
        ))}
      </Slider>
    </div>
  );
};

Mobile.propTypes = {
  experienceIds: PropTypes.array.isRequired,
  experiences: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  experienceIds: state.experiences.allIds,
  experiences: state.experiences.byId
});

export default connect(mapStateToProps)(Mobile);
