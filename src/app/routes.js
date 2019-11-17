import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import PageLoader from "../shared/loader/page-loader";
import NavBar from "./nav-bar";
import AppModal from "../shared/modal/modal";
import MobileMenuButton from "./mobile-menu-button";
import AppService from "../app-service";
import { setFlagInitRoute } from "../redux/misc.actions";
import Toast from "../shared/toast/toast";
import {
  PAGE_ABOUT,
  PAGE_SKILLS,
  PAGE_EXPERIENCE,
  PAGE_CONTACT,
  PAGE_HOME
} from "../constants";
import PageWrapper from "../shared/page-wrapper";

// Build route strings array. Remove '/' as tihs is the default, added manually
const routes = AppService.pages.map(page => page.route);

const HomeLazyLoader = React.lazy(() => import("../home/home"));
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
        {routes.map((myRoute, idx) => (
          <Route key={idx} path={myRoute} children={() => null} />
        ))}
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  isInitRoute: state.misc.initRoute
});

export default connect(mapStateToProps)(withRouter(React.memo(Routes)));
