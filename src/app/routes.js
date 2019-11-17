import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import Loader from "../shared/loader/loader";
import NavBar from "./nav-bar";
import Contact from "../contact/contact";
import AppModal from "../shared/modal/modal";
import MobileMenuButton from "./mobile-menu-button";
import AppService from "../app-service";
import { setFlagInitRoute } from "../redux/misc.actions";
import Toast from "../shared/toast/toast";
import {
  PAGE_ABOUT,
  PAGE_HOME,
  PAGE_SKILLS,
  PAGE_EXPERIENCE,
  PAGE_CONTACT
} from "../constants";
import Footer from "./footer";
import BG_HOME from "../shared/images/home.png";

const fadeInAnimation = keyframes`${fadeIn}`;
const ElementHome = styled(Element)`
  background-image: url(${BG_HOME});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  animation: 2s ${fadeInAnimation};
`;

// Build route strings array. Remove '/' as tihs is the default, added manually
const routes = AppService.pages.map(page => page.route);

const AboutLazyLoader = React.lazy(() => import("../about/about"));
const SkillsLazyLoader = React.lazy(() => import("../skills/skills"));
const ExperienceLazyLoader = React.lazy(() =>
  import("../experience/experience")
);

const Routes = props => {
  // Move scroll to defined route once, when component is mounted
  useEffect(() => {
    const pageId = AppService.getIdFromRoute(props.location.pathname);
    if (pageId) {
      AppService.setScroll(pageId, 0);
    }
    setFlagInitRoute();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex h-screen antialiased text-base">
      <React.Suspense>
        <NavBar isLeft={true} />
      </React.Suspense>
      <main className="inline-block w-full h-full sm:ml-24 md:ml-32 lg:ml-40">
        <ElementHome
          name={PAGE_HOME}
          className="flex flex-col h-screen w-full items-center justify-center"
        >
          <React.Suspense
            fallback={
              <div>
                <Loader className="text-gray-500 h-16 w-16" />
              </div>
            }
          >
            home goes here
          </React.Suspense>
        </ElementHome>
        {/* Page About */}
        <Element name={PAGE_ABOUT} className="flex flex-col h-screen w-full">
          <React.Suspense
            fallback={
              <div className="flex h-screen w-full items-center justify-center">
                <Loader className="text-gray-500 h-16 w-16" />
              </div>
            }
          >
            <section className="py-4 px-4 sm:px-8 h-full">
              <div className="mb-4">
                <h1 className="font-bold sm:text-2xl">About</h1>
              </div>
              <AboutLazyLoader />
            </section>
          </React.Suspense>
        </Element>
        {/* Page Skills */}
        <Element
          name={PAGE_SKILLS}
          className="flex flex-col h-screen w-full bg-gray-100"
        >
          <React.Suspense
            fallback={
              <div className="flex h-screen w-full items-center justify-center">
                <Loader className="text-gray-500 h-16 w-16" />
              </div>
            }
          >
            <section className="py-4 px-4 sm:px-8 h-full">
              <div className="mb-4">
                <h1 className="font-bold sm:text-2xl">Skills</h1>
              </div>
              <SkillsLazyLoader />
            </section>
          </React.Suspense>
        </Element>
        {/* Page Experience */}
        <Element
          name={PAGE_EXPERIENCE}
          className="flex flex-col h-screen w-full backgroundPattern01"
        >
          <React.Suspense
            fallback={
              <div className="flex h-screen w-full items-center justify-center">
                <Loader className="text-gray-500 h-16 w-16" />
              </div>
            }
          >
            <section className="py-4 px-4 sm:px-8 h-full">
              <div className="mb-4">
                <h1 className="font-bold sm:text-2xl">Experience</h1>
              </div>
              <ExperienceLazyLoader />
            </section>
          </React.Suspense>
        </Element>
        {/* Page Contact */}
        <Element name={PAGE_CONTACT} className="flex flex-col h-screen w-full">
          <React.Suspense
            fallback={
              <div className="flex h-screen w-full items-center justify-center">
                <Loader className="text-gray-500 h-16 w-16" />
              </div>
            }
          >
            <section className="py-4 px-4 sm:px-8 h-full">
              <div className="mb-4">
                <h1 className="font-bold sm:text-2xl">Contact</h1>
              </div>
              <Contact />
            </section>
            <Footer />
          </React.Suspense>
        </Element>
        <Switch>
          <Redirect exact from="/" to="/home" />
          {routes.map((myRoute, idx) => (
            <Route key={idx} path={myRoute} children={() => null} />
          ))}
        </Switch>
      </main>
      <React.Suspense>
        <Toast />
      </React.Suspense>
      <React.Suspense>
        <AppModal />
      </React.Suspense>
      <React.Suspense>
        <MobileMenuButton />
      </React.Suspense>
    </div>
  );
};

const mapStateToProps = state => ({
  isInitRoute: state.misc.initRoute
});

export default connect(mapStateToProps)(withRouter(React.memo(Routes)));
