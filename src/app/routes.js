import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { Element } from "react-scroll";
import PropTypes from "prop-types";
import styled from "styled-components";
import PageLoader from "../shared/loader/pageLoader";
import NavBar from "./navBar";
import AppModal from "../shared/modal/modal";
import MobileMenuButton from "./mobileMenuButton";
import AppService from "../shared/appService";
import Toast from "../shared/toast/toast";
import {
  PAGE_ABOUT,
  PAGE_SKILLS,
  PAGE_EXPERIENCE,
  PAGE_CONTACT,
  PAGES
} from "../shared/constants";
import PageWrapper from "../shared/pageWrapper";
import { setFlagInitRoute } from "./ducks";
import HomeLoader from "../pages/home/homeLoader";

const StyledMainWrap = styled.div`
  display: flex;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${props => props.theme.size.d4};
`;

const StyledMain = styled.main`
  display: inline-block;
  width: 100%;
  height: 100%;

  @media (min-width: 640px) {
    margin-left: ${props => props.theme.size.d24};
  }
  @media (min-width: 768px) {
    margin-left: ${props => props.theme.size.d32};
  }
  @media (min-width: 1024px) {
    margin-left: ${props => props.theme.size.d40};
  }
`;

const StyledSkills = styled(PageWrapper)`
  background-color: ${props => props.theme.color.gray100};
`;

const StyledExperience = styled(Element)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

/**
 * Component to load Home page component lazily.
 */
const HomeLazyLoader = React.lazy(() => import("../pages/home/home"));
/**
 * Component to load Experience page component lazily.
 */
const ExperienceLazyLoader = React.lazy(() =>
  import("../pages/experience/experience")
);

/**
 * Routes to load inside App component. This was extracted from App because we want to scroll to the route defined in the url once this component is mounted.
 * @param {Object} props - Props object, expected 'isInitRoute' flag to scroll only once and 'location' provided by withRouter.
 * @returns {Object} - DIV DOM node with defined routes and all pages loaded lazily.
 */
const Routes = props => {
  const dispatch = useDispatch();

  //Execute when component is mounted.
  useEffect(() => {
    const pageId = AppService.getIdFromRoute(props.location.pathname);
    // Url has a valid route defined, scroll to page
    if (pageId) {
      AppService.setScroll(pageId, 0);
    }
    dispatch(setFlagInitRoute()); // set flag so scroll is executed only once
    // eslint-disable-next-line
  }, []);

  return (
    <StyledMainWrap>
      <React.Suspense>
        <NavBar isLeft={true} />
      </React.Suspense>
      <StyledMain>
        {/* Page Home */}
        <React.Suspense fallback={<HomeLoader />}>
          <HomeLazyLoader />
        </React.Suspense>
        {/* Page About */}
        <PageWrapper name={PAGE_ABOUT} title="About" />
        {/* Page Skills */}
        <StyledSkills name={PAGE_SKILLS} title="Skills" />
        {/* Page Experience */}
        <StyledExperience
          name={PAGE_EXPERIENCE}
          className="backgroundPattern01"
        >
          <React.Suspense fallback={<PageLoader />}>
            <section className="py-4 px-4 sm:px-8 h-full">
              <div className="mb-4">
                <h1 className="font-bold sm:text-2xl">Experience</h1>
              </div>
              <ExperienceLazyLoader />
            </section>
          </React.Suspense>
        </StyledExperience>
        {/* Page Contact */}
        <PageWrapper name={PAGE_CONTACT} title="Contact" withFooter />
      </StyledMain>
      <React.Suspense>
        <Toast />
        <AppModal />
        <MobileMenuButton />
      </React.Suspense>
      {/* Routes don't load pages, they are used only to update the url */}
      <Switch>
        {/* Default route is home */}
        <Redirect exact from="/" to="/home" />
        {PAGES.map((page, idx) => (
          <Route key={idx} path={page.route} children={() => null} />
        ))}
      </Switch>
    </StyledMainWrap>
  );
};

Routes.propTypes = {
  // Provided by withRouter, contains current url path
  location: PropTypes.object.isRequired,
  // Provided by Redux, flag to load url route on component first mount
  isInitRoute: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isInitRoute: state.app.initRoute // Flag to scroll content to initial url page
});

export default connect(mapStateToProps)(withRouter(React.memo(Routes)));
