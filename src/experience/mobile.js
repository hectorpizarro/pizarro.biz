import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import PropTypes from "prop-types";
import MobileMenu from "./mobile-menu";
import Card from "./card";
import AppService from "../app-service";
import { SLIDER_SETTINGS } from "../constants";

const Mobile = props => {
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
    const slideIndex = AppService.getClickId(event);
    sliderRef.slickGoTo(Number(slideIndex) + 1);
  };

  return (
    <div className="block sm:hidden -mt-4">
      <Slider ref={setSliderRef} {...SLIDER_SETTINGS}>
        <MobileMenu goToSlide={goToSlide} />
        {props.experiences.map((exp, idx) => (
          <Card key={idx} experience={exp} />
        ))}
      </Slider>
    </div>
  );
};

Mobile.propTypes = {
  experiences: PropTypes.array.isRequired // Experiences array from JSON
};

const mapStateToProps = state => ({
  experiences: state.misc.experiences // Experiences array stored in Redux
});

export default connect(mapStateToProps)(Mobile);
