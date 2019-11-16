import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";
import { fadeIn, slideInLeft, slideInRight, zoomIn } from "react-animations";
import Section from "../components/section";
import { PAGE_HOME } from "../constants";
import BG_HOME from "../components/images/home.png";
import Loader from "../components/loader/loader";

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const zoomInAnimation = keyframes`${zoomIn}`;

const HomeSection = styled(Section)`
  background-image: url(${BG_HOME});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  animation: 2s ${fadeInAnimation};
`;
const Name = styled.div`
  animation: 1s ${slideInLeftAnimation};
`;
const Title = styled.div`
  animation: 1s ${slideInRightAnimation};
`;
const Downloads = styled.div`
  animation: 1s ${zoomInAnimation};
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

  return bgImage ? (
    <HomeSection
      name={PAGE_HOME}
      className="flex flex-col items-center justify-center"
    >
      <div className="leading-relaxed tracking-wide text-white font-bold">
        <Name className="text-4xl">HECTOR PIZARRO</Name>
        <Title className="text-2xl mt-2 pt-2 border-t border-white">
          Web Developer - Tech Lead
        </Title>
      </div>
      <Downloads className="mt-20">
        <a
          href={`${process.env.PUBLIC_URL}/hector-pizarro-hyp3r-recommendation-letter.pdf`}
          download
          className="border rounded px-2 py-1 bg-gray-200 hover:bg-white text-gray-700 hover:text-black transition-colors transition-500"
        >
          <FontAwesomeIcon icon={faFileDownload} className="text-1xl mr-2" />
          <span>Letter</span>
        </a>

        <a
          href={`${process.env.PUBLIC_URL}/hector-pizarro-resume.pdf`}
          download
          className="border rounded px-2 py-1 bg-gray-200 hover:bg-white text-gray-700 hover:text-black ml-6 transition-colors transition-500"
        >
          <FontAwesomeIcon icon={faFileDownload} className="text-1xl mr-2" />
          <span>Resume</span>
        </a>
      </Downloads>
    </HomeSection>
  ) : (
    <Section
      name={PAGE_HOME}
      className="flex flex-col items-center justify-center"
    >
      <Loader className="text-gray-500 h-16 w-16" />
    </Section>
  );
};

export default React.memo(Home);
