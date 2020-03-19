import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";

/**
 * CSS keyframes for load animation
 */
const slideInUpAnimation = keyframes`${slideInUp}`;
/**
 * Styled 'footer' HTML5 element. Shows slide up animation on component first load.
 */
const StyledFooter = styled.footer`
  animation: 2s ${slideInUpAnimation};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${props => props.theme.size.d20};
  background-color: ${props => props.theme.color.gray900};
  padding-left: ${props => props.theme.size.d5};
  padding-right: ${props => props.theme.size.d5};
`;

const StyledColumnLeft = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.color.gray400};
  transition-property: color;
  transition-duration: 1000ms;

  &:hover {
    color: white;
  }
`;

const StyledColumnRight = styled.div`
  font-size: ${props => props.theme.fontsize.xl3};
  white-space: nowrap;
`;

const StyledPlaneIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontsize.xl3};
  margin-right: ${props => props.theme.size.d2};
  display: none;

  @media (min-width: 640px) {
    display: inline;
  }
`;

const StyledSocialLink = styled.a`
  color: ${props => props.theme.color.gray400};
  transition-property: color;
  transition-duration: 1000ms;
  margin-left: ${props => props.theme.size.d4};

  &:hover {
    color: white;
  }
`;

/**
 * Footer component, shown at Contact page bottom.
 * @returns {Object} HTML DOM footer node
 */
const Footer = () => {
  return (
    <StyledFooter>
      <StyledColumnLeft href="mailto:hpizarro@gmail.com">
        <StyledPlaneIcon icon={faPaperPlane} />
        <span>hpizarro@gmail.com</span>
      </StyledColumnLeft>
      <StyledColumnRight>
        <StyledSocialLink
          href="https://github.com/hectorpizarro"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </StyledSocialLink>
        <StyledSocialLink
          href="https://www.linkedin.com/in/hectorpizarro/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </StyledSocialLink>
        <StyledSocialLink
          href="https://www.instagram.com/hectorpizarrom/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </StyledSocialLink>
        <StyledSocialLink
          href="https://www.facebook.com/hectorpizarrom"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </StyledSocialLink>
      </StyledColumnRight>
    </StyledFooter>
  );
};

export default Footer;
