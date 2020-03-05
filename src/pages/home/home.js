import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { Element } from "react-scroll";
import BG_HOME from "../../shared/images/home.png";
import PageLoader from "../../shared/loader/page-loader";
import HomeContent from "./home-content";
import { PAGE_HOME } from "../../shared/constants";

/**
 * Animation keyframes
 */
const fadeInAnimation = keyframes`${fadeIn}`;

/**
 * Background image, initial animation applied on component mount.
 */
const ElementHome = styled(Element)`
  background-image: url(${BG_HOME});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  animation: 2s ${fadeInAnimation};
`;

/**
 * Home page component.
 * @returns {Object} Element component as required by react-scroll.
 */
const Home = () => {
  /**
   * Store to state background image src once it's cached and loaded.
   */
  const [bgImage, setBgImage] = useState("");
  // On component mount load and cache background image.
  useEffect(() => {
    const img = document.createElement("IMG");
    // Image loaded, store src to state and delete image object
    img.addEventListener("load", () => {
      setBgImage(BG_HOME);
      img.remove();
    });
    img.src = BG_HOME;
  }, []);

  // Image was loaded and cached, animate and show page
  if (bgImage) {
    return (
      <ElementHome
        name={PAGE_HOME}
        className="flex flex-col h-screen w-full items-center justify-center"
      >
        <HomeContent />
      </ElementHome>
    );
  }
  // Waiting for background image load, show loader.
  return (
    <Element name={PAGE_HOME} className="flex flex-col h-screen w-full">
      <PageLoader />
    </Element>
  );
};

export default React.memo(Home);
