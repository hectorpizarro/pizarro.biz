import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import MobileMenu from "./mobile-menu";
import Card from "./card";
import AppService from "../app-service";

const sliderSettings = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500
};

const Mobile = props => {
  let sliderRef = null;

  const setSliderRef = ref => (sliderRef = ref);

  const goToSlide = event => {
    const slideIndex = AppService.getClickId(event);
    sliderRef.slickGoTo(Number(slideIndex) + 1);
  };

  return (
    <div className="block sm:hidden -mt-4">
      <Slider ref={setSliderRef} {...sliderSettings}>
        <MobileMenu goToSlide={goToSlide} />
        {props.experiences.map((exp, idx) => (
          <Card key={idx} experience={exp} />
        ))}
      </Slider>
    </div>
  );
};

const mapStateToProps = state => ({
  experiences: state.experiences
});

export default connect(mapStateToProps)(Mobile);
