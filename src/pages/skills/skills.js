import React, { useState } from "react";
import { SlideDown } from "react-slidedown";
import styled from "styled-components";
import AppService from "../../shared/appService";
import { SKILLS_SECTIONS } from "../../shared/constants";

import "react-slidedown/lib/slidedown.css";

const StyledSkills = styled.div`
  font-size: ${props => props.theme.fontsize.xs};

  @media (min-width: 640px) {
    font-size: ${props => props.theme.fontsize.sm};
  }

  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontsize.base};
  }
`;

// Exported for testing purposes
export const StyledSlidedown = styled(SlideDown)`
  border: 1px solid ${props => props.theme.color.gray400};
  border-top-color: transparent;
  padding: ${props => props.theme.size.d2};
  background-color: white;
`;

const StyledSlidedownButton = styled.button`
  font-weight: 700;
  border: 1px solid ${props => props.theme.color.gray500};
  background-color: ${props => props.theme.color.gray300};
  text-align: left;
  width: 100%;
  padding: ${props => props.theme.size.d2};
  cursor: pointer;
  transition-property: background-color, border-color;
  transition-duration: 500ms;

  &:hover {
    border: 1px solid ${props => props.theme.color.gray800};
    background-color: white;
  }
`;

const StyledSubtitle0 = styled.span`
  font-weight: 700;
`;

const StyledSubtitle1 = styled.span`
  font-style: italic;
  text-decoration: underline;
  margin-right: ${props => props.theme.size.d2};
`;

const StyledSubtitle2 = styled.span`
  font-weight: 700;
  margin-right: ${props => props.theme.size.d2};
`;

const StyledList1 = styled.ul`
  margin-left: ${props => props.theme.size.d6};
  list-style-position: outside;
  list-style-type: disc;
`;

const StyledList2 = styled.ul`
  margin-left: ${props => props.theme.size.d2};
  list-style-position: outside;
`;

/**
 * Skills page
 * @returns {Object} DIV DOM node
 */
const Skills = () => {
  /**
   * Keep state of the three sections. Only one can be open at any time.
   */
  const [closed, setClosed] = useState({
    advanced: false,
    intermediate: true,
    novice: true
  });

  /**
   * Update state, set clicked section open. If already open no change applied.
   * @param {Object} event - Click event
   */
  const handleClick = event => {
    const sectionId = AppService.getClickId(event);
    const newState = {};
    SKILLS_SECTIONS.forEach(el => {
      newState[el] = sectionId !== el;
    });
    setClosed(newState);
  };

  return (
    <StyledSkills>
      <StyledSlidedownButton
        type="button"
        data-id="advanced"
        onClick={handleClick}
      >
        Advanced
      </StyledSlidedownButton>
      <StyledSlidedown closed={closed.advanced}>
        <p>
          Technologies I used for most of my projects, usually requiring
          compilation, installation, configuration and management:
        </p>
        <StyledList1>
          <li>
            <StyledSubtitle0>SPA web development:</StyledSubtitle0>
            <StyledList2>
              <li>
                <StyledSubtitle1>JS:</StyledSubtitle1>
                <span>
                  JavaScript ES6, AngularJS, React, Redux, styled components.
                </span>
              </li>
              <li>
                <StyledSubtitle1>Build:</StyledSubtitle1>
                <span>
                  Gulp, Browserify, Webpack, npm, Chrome extension API, git,
                  storybook.
                </span>
              </li>
              <li>
                <StyledSubtitle1>Services:</StyledSubtitle1>
                <span>Github, Jira, Sentry, Full Story, circleCI.</span>
              </li>
              <li>
                <StyledSubtitle1>Libraries:</StyledSubtitle1>
                <span>
                  Axios, Lodash, JQuery, bootstrap, Mapbox, Masonry, Moment,
                  Google maps.
                </span>
              </li>
              <li>
                <StyledSubtitle1>Test:</StyledSubtitle1>
                <span>Jest, Jazmine.</span>
              </li>
            </StyledList2>
          </li>
          <li>
            <StyledSubtitle2>Linux distributions:</StyledSubtitle2>
            <span>
              Red Hat Enterprise Linux 4/5, Debian, Ubuntu, Gentoo, Open SuSE,
              Fedora, CentOS, Linux Mint. Used linux as workstation for 5 years.
            </span>
          </li>
          <li>
            <StyledSubtitle2>Linux services:</StyledSubtitle2>
            <span>
              Apache web server, MySQL database server, PostgreSQL database
              server, nginx, redis, mongoDB.
            </span>
          </li>
          <li>
            <StyledSubtitle2>Backend Development languages:</StyledSubtitle2>
            <StyledList2>
              <li>
                <StyledSubtitle1>PHP:</StyledSubtitle1>
                <span>
                  OOP PHP, Symfony, CodeIgniter, Zend Framework, CakePHP.
                </span>
              </li>
              <li>
                <StyledSubtitle1>Perl:</StyledSubtitle1>
                <span>Scripting, mod_perl, Mason framework.</span>
              </li>
            </StyledList2>
          </li>
          <li>
            <StyledSubtitle2>Web technologies:</StyledSubtitle2>
            <span>HTML5, CSS3.</span>
          </li>
        </StyledList1>
      </StyledSlidedown>
      <StyledSlidedownButton
        type="button"
        data-id="intermediate"
        onClick={handleClick}
      >
        Intermediate
      </StyledSlidedownButton>
      <StyledSlidedown closed={closed.intermediate}>
        <p>
          Technologies I have used on multiple projects through the years, but I
          don&apos;t have in-depth experience. As an example I have known Java
          for 10+ years now but never was part of a complex project, only simple
          sites or specific applications.
        </p>
        <StyledList1>
          <li>
            <StyledSubtitle2>Development Languages:</StyledSubtitle2>
            <span>
              PHP Doctrine ORM, Bash scripting, Regular Expressions, WordPress
              plugin development using custom React libraries.
            </span>
          </li>
          <li>
            <StyledSubtitle2>Services:</StyledSubtitle2>
            <span>
              Perforce, Open Social, Facebook PHP API, FBML (Facebook Markup
              Language), Google apps API, Jenkins.
            </span>
          </li>
        </StyledList1>
      </StyledSlidedown>

      <StyledSlidedownButton
        type="button"
        data-id="novice"
        onClick={handleClick}
      >
        Novice
      </StyledSlidedownButton>
      <StyledSlidedown closed={closed.novice}>
        <p>
          Technologies used for a single specific project or for research
          purposes in behalf of clients. Also includes languages that I&apos;m
          not interested to delve into. Some are deprecated.
        </p>
        <StyledList1>
          <li>
            <StyledSubtitle2>Development languages:</StyledSubtitle2>
            <span>
              Java (JSP, servlets, javabeans), coffeescript, Applescript, Ruby,
              ActionScript, Objective C, C.
            </span>
          </li>
          <li>
            <StyledSubtitle2>Build:</StyledSubtitle2>
            <span>CVS, SVN, Backbone, Prototype.</span>
          </li>
          <li>
            <StyledSubtitle2>Services:</StyledSubtitle2>
            <span>
              Hudson CI, Apache Ant, Bugzilla, Atlassian Crucible, Novel Netware
              4.
            </span>
          </li>
        </StyledList1>
      </StyledSlidedown>
    </StyledSkills>
  );
};

export default Skills;
