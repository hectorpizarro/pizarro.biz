import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./experience.css";
import Mobile from "./mobile";
import Desktop from "./desktop";
import "./background.css";
import {
  fetchExperiences,
  STATUS_LOADING,
  STATUS_IDLE,
  STATUS_LOADED,
  endLoading
} from "./ducks";
import { doShowToast } from "../../shared/toast/ducks";

// Mount animation keyframes
const fadeInAnimation = keyframes`${fadeIn}`;

// Styled to add animation at component mount
const Content = styled.div`
  animation: 2s ${fadeInAnimation};
`;

/**
 * Experience page component.
 */
const Experience = ({ loadStatus, endLoading, loadError, experienceIds }) => {
  const dispatch = useDispatch();

  // Load experiences data from JSON on component mount.
  useEffect(() => {
    dispatch(fetchExperiences());
    // eslint-disable-next-line
  }, []);

  // Listen changes to loadStatus
  useEffect(() => {
    if (loadStatus === STATUS_LOADED) {
      if (loadError) {
        dispatch(
          doShowToast("Error loading experiences data, please reload.", false)
        );
      }
      endLoading();
    }
  });

  switch (loadStatus) {
    case STATUS_LOADING:
      return (
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-gray-500">Loading experiences...</p>
        </div>
      );
    case STATUS_IDLE: {
      if (experienceIds.length > 0) {
        return (
          <Content>
            <Mobile />
            <Desktop />
          </Content>
        );
      }
      return null;
    }
    case STATUS_LOADED:
      return null;
    default:
      return null;
  }
};

Experience.propTypes = {
  loadStatus: PropTypes.string,
  loadError: PropTypes.string,
  experienceIds: PropTypes.array
};

const mapStateToProps = state => ({
  loadStatus: state.experiences.status,
  loadError: state.experiences.error,
  experienceIds: state.experiences.allIds
});

const mapDispatchToProps = {
  endLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(Experience);