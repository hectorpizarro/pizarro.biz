import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import Section from "../components/section";
import { PAGE_ABOUT } from "../constants";

const fadeInAnimation = keyframes`${fadeIn}`;

const AboutContent = styled(Section)`
  animation: 2s ${fadeInAnimation};
`;

const About = () => {
  return (
    <AboutContent name={PAGE_ABOUT} title="About">
      <div className="text-xs sm:text-lg lg:text-xl">
        <p className="mb-3 sm:mb-4 md:mb-8 lg:mb-8 text-justify">
          Hello, my name is <span className="font-bold">Hector Pizarro</span>, I
          have been a web developer for two decades and technical leader for the
          last 15+ years and counting. Since the first time I had the chance to
          open a Netscape Navigator browser in the 90's, still a student at the
          time, I wanted to find out what this 'internet' was all about. Then
          and there I chose to dedicate my newly born professional life to
          develop web projects.
        </p>
        <p className="mb-3 sm:mb-4 md:mb-8 lg:mb-8 text-justify">
          Lots of things have happened since then. Born in Peru and now living
          in Argentina, from working on small html sites to plan, construct and
          maintain enterprise SPA frontend projects, I have always find a way to
          renew my passion for code. Exploring open source technologies like
          LAMP, CSS3, HTML5, JavaScript frameworks as AngularJS or React, I have
          spent as many hours building products as accumulating experience with
          new tools and technologies... and loving every minute of it.
        </p>
        <p className="mb-3 sm:mb-4 md:mb-8 lg:mb-8 text-justify">
          As I grew professionally I learned to work with a team around me,
          balance our skills, seniority and those small and big quirks every
          human have to provide better synergy for our common goals. Eventually
          I lead teams, started to deal with internal customers - managers,
          bosses, owners - and external ones - in behalf of my company and team
          - and got the "Technical Leader" monicker even before it existed.
        </p>
        <p className="mb-3 sm:mb-4 md:mb-8 lg:mb-8 text-justify">
          This site provides a better way to list my skills and describe my
          experiences. It also gives an example of what I do at the moment as
          the code is available in my github. If you feel like my profile fits
          your business needs, contact me, let's talk.
        </p>
        <div className="font-bold text-right text-base sm:text-xl lg:text-2xl">
          Hector
        </div>
      </div>
    </AboutContent>
  );
};

export default About;
