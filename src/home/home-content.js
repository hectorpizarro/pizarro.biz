import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInLeft, slideInRight, zoomIn } from "react-animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const zoomInAnimation = keyframes`${zoomIn}`;

const Name = styled.div`
  animation: 1s ${slideInLeftAnimation};
`;
const Title = styled.div`
  animation: 1s ${slideInRightAnimation};
`;
const Downloads = styled.div`
  animation: 1s ${zoomInAnimation};
`;

const HomeContent = () => {
  return (
    <div>
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
    </div>
  );
};

export default React.memo(HomeContent);