/**
 * About page
 */
import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  font-size: ${props => props.theme.fontsize.xs};
  @media (min-width: 640px) {
    font-size: ${props => props.theme.fontsize.base};
  }
`;

const StyledP = styled.p`
  text-align: justify;
  margin-bottom: ${props => props.theme.size.d3};

  strong {
    font-weight: 700;
  }

  @media (min-width: 640px) {
    margin-bottom: ${props => props.theme.size.d4};
  }
  @media (min-width: 768px) {
    margin-bottom: ${props => props.theme.size.d8};
  }
`;

const StyledSignature = styled.div`
  font-weight: 700;
  text-align: right;
  font-size: ${props => props.theme.fontsize.base};
  @media (min-width: 640px) {
    font-size: ${props => props.theme.fontsize.xl1};
  }
  @media (min-width: 1024px) {
    font-size: ${props => props.theme.fontsize.xl2};
  }
`;

/**
 * About page component.
 * @returns {Object} DIV HTML node
 */
const About = () => {
  return (
    <StyledAbout>
      <StyledP>
        Hello, my name is <strong>Hector Pizarro</strong>, I have been a web
        developer for two decades and technical leader for the last 15+ years
        and counting. Since the first time I had the chance to open a Netscape
        Navigator browser in the 90's, still a student at the time, I wanted to
        find out what this 'internet' was all about. Then and there I chose to
        dedicate my newly born professional life to develop web projects.
      </StyledP>
      <StyledP>
        Lots of things have happened since then. Born in Peru and now living in
        Argentina, from working on small html sites to plan, construct and
        maintain enterprise SPA frontend projects, I have always find a way to
        renew my passion for code. Exploring open source technologies like LAMP,
        CSS3, HTML5, JavaScript frameworks as AngularJS or React, I have spent
        as many hours building products as accumulating experience with new
        tools and technologies... and loving every minute of it.
      </StyledP>
      <StyledP>
        As I grew professionally I learned to work with a team around me,
        balance our skills, seniority and those small and big quirks every human
        have to provide better synergy for our common goals. Eventually I lead
        teams, started to deal with internal customers - managers, bosses,
        owners - and external ones - in behalf of my company and team - and got
        the "Technical Leader" monicker even before it existed.
      </StyledP>
      <StyledP>
        This site provides a better way to list my skills and describe my
        experiences. It also gives an example of what I do at the moment as the
        code is available in my github. If you feel like my profile fits your
        business needs, contact me, let's talk.
      </StyledP>
      <StyledSignature>Hector</StyledSignature>
    </StyledAbout>
  );
};

export default About;
