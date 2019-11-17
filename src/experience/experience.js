import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { loadExperiences } from "../redux/async-actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./experience.css";
import Mobile from "./mobile";
import Desktop from "./desktop";
import Loader from "../shared/loader/loader";
import "../css/background.css";

const fadeInAnimation = keyframes`${fadeIn}`;

const Content = styled.div`
  animation: 2s ${fadeInAnimation};
`;

const Experience = props => {
  useEffect(() => {
    loadExperiences();
  }, []);

  if (props.experiences) {
    return (
      <Content>
        <Mobile />
        <Desktop />
      </Content>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loader className="text-gray-500 h-16 w-16" />
    </div>
  );
};

const mapStateToProps = state => ({
  experiences: state.misc.experiences
});

export default connect(mapStateToProps)(Experience);
