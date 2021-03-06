import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mobile from "./mobile";
import Desktop from "./desktop";
import {
  fetchExperiences,
  STATUS_LOADING,
  STATUS_IDLE,
  STATUS_LOADED,
  endLoading
} from "./experience.slice";
import { doShowToast } from "../../shared/toast/toast.slice";

// Mount animation keyframes
const fadeInAnimation = keyframes`${fadeIn}`;

// Styled to add animation at component mount
const StyledWrap = styled.div`
  animation: 2s ${fadeInAnimation};
`;

const StyledLoading = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledP = styled.p`
  color: ${props => props.theme.color.gray500};
`;

/**
 * Experience page component.
 */
const Experience = ({
  loadStatus,
  propEndLoading,
  loadError,
  experienceIds
}) => {
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
      propEndLoading();
    }
  });

  switch (loadStatus) {
    case STATUS_LOADING:
      return (
        <StyledLoading>
          <StyledP>Loading experiences...</StyledP>
        </StyledLoading>
      );
    case STATUS_IDLE: {
      if (experienceIds.length > 0) {
        return (
          <StyledWrap>
            <Mobile />
            <Desktop />
          </StyledWrap>
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
  loadStatus: PropTypes.string.isRequired,
  propEndLoading: PropTypes.func.isRequired,
  loadError: PropTypes.string.isRequired,
  experienceIds: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  loadStatus: state.experiences.status,
  loadError: state.experiences.error,
  experienceIds: state.experiences.allIds
});

const mapDispatchToProps = {
  propEndLoading: endLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
