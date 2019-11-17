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

const slideInUpAnimation = keyframes`${slideInUp}`;
const Content = styled.footer`
  animation: 2s ${slideInUpAnimation};
`;

const Footer = () => {
  return (
    <Content className="flex items-center justify-between h-20 bg-gray-900 px-5">
      <div>
        <span className="footerButton">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-3xl mr-2 hidden sm:inline"
          />
          <span>hpizarro@gmail.com</span>
        </span>
      </div>
      <div className="text-3xl whitespace-no-wrap">
        <a
          href="https://github.com/hectorpizarro"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton ml-4"
          aria-label="Github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/hectorpizarro/"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton ml-4"
          aria-label="Linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/hectorpizarrom/"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton ml-4"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/hectorpizarrom"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton ml-4"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </Content>
  );
};

export default React.memo(Footer);
