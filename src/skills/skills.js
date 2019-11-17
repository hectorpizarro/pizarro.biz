import React, { useState } from "react";
import { SlideDown } from "react-slidedown";
import Section from "../shared/section/section";
import { PAGE_SKILLS } from "../constants";
import "react-slidedown/lib/slidedown.css";
import AppService from "../app-service";

const sectionIds = ["advanced", "intermediate", "novice"];

const Skills = () => {
  const [closed, setClosed] = useState({
    advanced: false,
    intermediate: true,
    novice: true
  });

  const handleCLick = event => {
    const sectionId = AppService.getClickId(event);
    const newState = {};
    sectionIds.forEach(el => {
      newState[el] = sectionId !== el;
    });
    setClosed(newState);
  };

  return (
    <Section name={PAGE_SKILLS} title="Skills" className="bg-gray-100">
      <div className="text-xs sm:text-sm md:text-base">
        <button
          className="font-bold border border-gray-500 bg-gray-300 text-left w-full p-2 hover:border-gray-800 hover:bg-white transition-colors transition-500 cursor-pointer"
          data-id="advanced"
          onClick={handleCLick}
        >
          Advanced
        </button>
        <SlideDown
          className={
            "skills-slidedown border-l border-r border-b border-gray-400 p-2 bg-white"
          }
          closed={closed.advanced}
        >
          <p>
            Technologies I used for most of my projects, usually requiring
            compilation, installation, configuration and management:
          </p>
          <ul className="ml-6 list-outside list-disc">
            <li>
              <span className="font-semibold">SPA web development:</span>
              <ul className="ml-2 list-outside">
                <li>
                  <span className="italic underline mr-2">{`Javascript:`}</span>
                  <span>
                    JavaScript ES6, AngularJS, React, Redux, styled components.
                  </span>
                </li>
                <li>
                  <span className="italic underline mr-2">Build:</span>
                  <span>
                    Gulp, Browserify, Webpack, npm, Chrome extension API, git,
                    storybook.
                  </span>
                </li>
                <li>
                  <span className="italic underline mr-2">Services:</span>
                  <span>Github, Jira, Sentry, Full Story, circleCI.</span>
                </li>
                <li>
                  <span className="italic underline mr-2">Libraries:</span>
                  <span>
                    Axios, Lodash, JQuery, bootstrap, Mapbox, Masonry, Moment,
                    Google maps.
                  </span>
                </li>
                <li>
                  <span className="italic underline mr-2">Test:</span>
                  <span>Jest, Jazmine.</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold mr-2">Linux distributions:</span>
              <span>
                Red Hat Enterprise Linux 4/5, Debian, Ubuntu, Gentoo, Open SuSE,
                Fedora, CentOS, Linux Mint. Used linux as workstation for 5
                years.
              </span>
            </li>
            <li>
              <span className="font-semibold mr-2">Linux services:</span>
              <span>
                Apache web server, MySQL database server, PostgreSQL database
                server, nginx, redis, mongoDB.
              </span>
            </li>
            <li>
              <span className="font-semibold mr-2">
                Backend Development languages:
              </span>
              <ul className="ml-2 list-outside">
                <li>
                  <span className="italic underline mr-2">PHP:</span>
                  <span>
                    OOP PHP, Symfony, CodeIgniter, Zend Framework, CakePHP.
                  </span>
                </li>
                <li>
                  <span className="italic underline mr-2">Perl:</span>
                  <span>Scripting, mod_perl, Mason framework.</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold mr-2">Web technologies:</span>
              <span>HTML5, CSS3.</span>
            </li>
          </ul>
        </SlideDown>
        <div
          className="font-bold border border-gray-500 bg-gray-300 text-left w-full p-2 hover:border-gray-800 hover:bg-white transition-colors transition-500 cursor-pointer"
          data-id="intermediate"
          onClick={handleCLick}
        >
          Intermediate
        </div>
        <SlideDown
          className={
            "skills-slidedown border-l border-r border-b border-gray-400 p-2 bg-white"
          }
          closed={closed.intermediate}
        >
          <p>
            Technologies I have used on multiple projects through the years, but
            I don't have in-depth experience. As an example I have known Java
            for 10+ years now but never was part of a complex project, only
            simple sites or specific applications.
          </p>
          <ul className="ml-6 list-outside list-disc">
            <li>
              <span className="font-semibold mr-2">Development Languages:</span>
              <span>
                PHP Doctrine ORM, Bash scripting, Regular Expressions.
              </span>
            </li>
            <li>
              <span className="font-semibold mr-2">Services:</span>
              <span>
                Perforce, Open Social, Facebook PHP API, FBML (Facebook Markup
                Language), Google apps API, Jenkins.
              </span>
            </li>
          </ul>
        </SlideDown>

        <div
          className="font-bold border border-gray-500 bg-gray-300 text-left w-full p-2 hover:border-gray-800 hover:bg-white transition-colors transition-500 cursor-pointer"
          data-id="novice"
          onClick={handleCLick}
        >
          Novice
        </div>
        <SlideDown
          className={
            "skills-slidedown border-l border-r border-b border-gray-400 p-2 bg-white"
          }
          closed={closed.novice}
        >
          <p>
            Technologies used for a single specific project or for research
            purposes in behalf of clients. Also includes languages that I'm not
            interested to delve into. Some are deprecated.
          </p>
          <ul className="ml-6 list-outside list-disc">
            <li>
              <span className="font-semibold mr-2">Development languages:</span>
              <span>
                Java (JSP, servlets, javabeans), coffeescript, Applescript,
                Ruby, ActionScript, Objective C, C.
              </span>
            </li>

            <li>
              <span className="font-semibold mr-2">Build:</span>
              <span>CVS, SVN, Backbone, Prototype.</span>
            </li>
            <li>
              <span className="font-semibold mr-2">Services:</span>
              <span>
                Hudson CI, Apache Ant, Bugzilla, Atlassian Crucible, Novel
                Netware 4.
              </span>
            </li>
          </ul>
        </SlideDown>
      </div>
    </Section>
  );
};

export default React.memo(Skills);
