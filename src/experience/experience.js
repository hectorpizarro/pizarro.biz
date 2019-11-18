import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import PropTypes from "prop-types";
import { loadExperiences } from "../redux/async-actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./experience.css";
import Mobile from "./mobile";
import Desktop from "./desktop";
import "../css/background.css";

// Mount animation keyframes
const fadeInAnimation = keyframes`${fadeIn}`;
// Styled to add animation at component mount
const Content = styled.div`
  animation: 2s ${fadeInAnimation};
`;

/**
 * Experience page component.
 * @param {Object} props - Props
 */
const Experience = props => {
  // Load experiences data from JSON on component mount.
  useEffect(() => {
    loadExperiences();
  }, []);

  // Experiences loaded, show content.
  if (props.experiences) {
    return (
      <Content>
        <Mobile />
        <Desktop />
      </Content>
    );
  }

  // JSON still not loaded, show message
  return (
    <div className="flex h-full w-full items-center justify-center">
      <p className="text-gray-500">Loading experiences...</p>
    </div>
  );
};

Experience.propTypes = {
  experiences: PropTypes.array // Experiences array from JSON
};

const mapStateToProps = state => ({
  experiences: state.misc.experiences // Experiences array stored in Redux
});

export default connect(mapStateToProps)(Experience);
