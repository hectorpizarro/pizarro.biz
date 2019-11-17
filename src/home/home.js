import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { Element } from "react-scroll";
import BG_HOME from "../shared/images/home.png";
import PageLoader from "../shared/loader/page-loader";
import HomeContent from "./home-content";
import { PAGE_HOME } from "../constants";

const fadeInAnimation = keyframes`${fadeIn}`;

const ElementHome = styled(Element)`
  background-image: url(${BG_HOME});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  animation: 2s ${fadeInAnimation};
`;

const Home = () => {
  const [bgImage, setBgImage] = useState("");
  useEffect(() => {
    const img = document.createElement("IMG");
    img.addEventListener("load", () => {
      setBgImage(BG_HOME);
      img.remove();
    });
    img.src = BG_HOME;
  }, []);

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
  return (
    <Element name={PAGE_HOME} className="flex flex-col h-screen w-full">
      <PageLoader />
    </Element>
  );
};

export default React.memo(Home);
