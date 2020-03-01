import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { Element } from "react-scroll";
import PropTypes from "prop-types";
import PageLoader from "../shared/loader/page-loader";
import NavBar from "./nav-bar";
import AppModal from "../shared/modal/modal";
import MobileMenuButton from "./mobile-menu-button";
import AppService from "../app-service";
import Toast from "../shared/toast/toast";
import {
  PAGE_ABOUT,
  PAGE_SKILLS,
  PAGE_EXPERIENCE,
  PAGE_CONTACT,
  PAGE_HOME,
  PAGES
} from "../constants";
import PageWrapper from "../shared/page-wrapper";
import { setFlagInitRoute } from "../ducks";

/**
 * Component to load Home page component lazily.
 */
const HomeLazyLoader = React.lazy(() => import("../home/home"));
/**
 * Component to load Experience page component lazily.
 */
const ExperienceLazyLoader = React.lazy(() =>
  import("../experience/experience")
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
    <div className="flex h-screen antialiased text-base">
      <React.Suspense>
        <NavBar isLeft={true} />
      </React.Suspense>
      <main className="inline-block w-full h-full sm:ml-24 md:ml-32 lg:ml-40">
        {/* Page Home */}
        <React.Suspense
          fallback={
            <Element name={PAGE_HOME} className="flex flex-col h-screen w-full">
              <PageLoader />
            </Element>
          }
        >
          <HomeLazyLoader />
        </React.Suspense>
        {/* Page About */}
        <PageWrapper name={PAGE_ABOUT} title="About" />
        {/* Page Skills */}
        <PageWrapper
          name={PAGE_SKILLS}
          title="Skills"
          className="bg-gray-100"
        />
        {/* Page Experience */}
        <Element
          name={PAGE_EXPERIENCE}
          className="flex flex-col h-screen w-full backgroundPattern01"
        >
          <React.Suspense fallback={<PageLoader />}>
            <section className="py-4 px-4 sm:px-8 h-full">
              <div className="mb-4">
                <h1 className="font-bold sm:text-2xl">Experience</h1>
              </div>
              <ExperienceLazyLoader />
            </section>
          </React.Suspense>
        </Element>
        {/* Page Contact */}
        <PageWrapper name={PAGE_CONTACT} title="Contact" withFooter />
      </main>
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
    </div>
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
