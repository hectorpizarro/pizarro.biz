import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import PropTypes from "prop-types";
import styled from "styled-components";
import MobileMenu from "./mobileMenu";
import Card from "./detailCard/detailCard";
import AppService from "../../shared/appService";
import { SLIDER_SETTINGS } from "../../shared/constants";

const StyledSliderWrap = styled.div`
  display: block;
  margin-top: -${props => props.theme.size.d4};
  @media (min-width: 640px) {
    display: none;
  }
`;

const Mobile = ({ experienceIds, experiences }) => {
  let sliderRef = null; // Reference to DOM node

  /**
   * Store reference to DOM node. Required for slide functionality.
   * @param {Object} ref DOM node
   */
  const setSliderRef = ref => {
    sliderRef = ref;
  };

  /**
   * Moves slide to selected section
   * @param {Object} event - Click event
   */
  const goToSlide = event => {
    const experienceId = AppService.getClickId(event);
    const idx = experienceIds.findIndex(el => el === experienceId);
    sliderRef.slickGoTo(idx + 1);
  };

  const {
    arrows,
    dots,
    infinite,
    slidesToScroll,
    slidesToShow,
    speed
  } = SLIDER_SETTINGS;
  return (
    <StyledSliderWrap>
      <Slider
        ref={setSliderRef}
        arrows={arrows}
        dots={dots}
        infinite={infinite}
        slidesToScroll={slidesToScroll}
        slidesToShow={slidesToShow}
        speed={speed}
      >
        <MobileMenu goToSlide={goToSlide} />
        {experienceIds.map(experienceId => (
          <Card key={experienceId} experience={experiences[experienceId]} />
        ))}
      </Slider>
    </StyledSliderWrap>
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
