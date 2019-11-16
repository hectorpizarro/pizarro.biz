import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { loadExperiences } from "../redux/async-actions";
import Section from "../components/section";
import { PAGE_EXPERIENCE } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./experience.css";
import Mobile from "./mobile";
import Desktop from "./desktop";

import "../css/background.css";

const fadeInAnimation = keyframes`${fadeIn}`;

const ExperienceContent = styled.div`
  animation: 2s ${fadeInAnimation};
`;

const Experience = props => {
  useEffect(() => {
    loadExperiences();
  }, []);

  return (
    <Section
      name={PAGE_EXPERIENCE}
      title="Experience"
      className="backgroundPattern01"
    >
      {props.experiences && (
        <ExperienceContent>
          <Mobile />
          <Desktop />
        </ExperienceContent>
      )}
    </Section>
  );
};

const mapStateToProps = state => ({
  experiences: state.experiences
});

export default connect(mapStateToProps)(Experience);
