import React from "react";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

/**
 * Animation keyframes
 */
const animateName = keyframes`
from {
  left: -100px;
  opacity: 0;
}
to {
  left: 0px;
  opacity: 1;
}
`;

const animateTitle = keyframes`
from {
  right: -100px;
  opacity: 0;
}
to {
  right: 0px;
  opacity: 1;
}
`;

// Download buttons row animation keyframes
const zoomInAnimation = keyframes`${zoomIn}`;

/**
 * Animation for Name row
 */
const StyledName = styled.div`
  animation: 1s ${animateName};
  position: relative;
  font-size: ${props => props.theme.fontsize.xl2};
  white-space: nowrap;
  @media (min-width: 640px) {
    font-size: ${props => props.theme.fontsize.xl4};
  }
`;

/**
 * Animation for Titles row
 */
const StyledTitle = styled.div`
  animation: 1s ${animateTitle};
  position: relative;
  font-size: ${props => props.theme.fontsize.base};
  margin-top: ${props => props.theme.size.d2};
  padding-top: ${props => props.theme.size.d2};
  border-top: 1px solid white;
  white-space: nowrap;
  @media (min-width: 640px) {
    font-size: ${props => props.theme.fontsize.xl2};
  }
`;

const StyledRow2 = styled.div`
  animation: 1s ${zoomInAnimation};
  margin-top: ${props => props.theme.size.d20};
  text-align: center;
  white-space: nowrap;
`;

const StyledRow1 = styled.div`
  line-height: 1.625;
  letter-spacing: 0.025em;
  color: white;
  font-weight: 700;
`;

const StyledLinkLetter = styled.a`
  border-radius: ${props => props.theme.size.d1};
  border: 1px solid black;
  background-color: ${props => props.theme.color.gray200};
  color: ${props => props.theme.color.gray700};
  transition-property: background-color, color;
  transition-duration: 500ms;
  padding: ${props => {
    const { d1, d2 } = props.theme.size;
    return `${d1} ${d2} ${d1} ${d2}`;
  }};
  &:hover {
    background-color: white;
    color: black;
  }
`;

const StyledDownloadIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontsize.base};
  margin-right: ${props => props.theme.size.d2};
`;

const StyledLinkResume = styled(StyledLinkLetter)`
  margin-left: ${props => props.theme.size.d6};
`;

/**
 * Home page component.
 * @returns {Object} Element component as required by react-scroll.
 */
const Home = () => {
  return (
    <>
      <StyledRow1>
        <StyledName>HECTOR PIZARRO</StyledName>
        <StyledTitle>Web Developer - Tech Lead</StyledTitle>
      </StyledRow1>
      <StyledRow2>
        <StyledLinkLetter
          href={`${process.env.PUBLIC_URL}/hector-pizarro-hyp3r-recommendation-letter.pdf`}
          download
        >
          <StyledDownloadIcon icon={faFileDownload} />
          <span>Letter</span>
        </StyledLinkLetter>

        <StyledLinkResume
          href={`${process.env.PUBLIC_URL}/hector-pizarro-resume.pdf`}
          download
        >
          <StyledDownloadIcon icon={faFileDownload} />
          <span>Resume</span>
        </StyledLinkResume>
      </StyledRow2>
    </>
  );
};

export default Home;
