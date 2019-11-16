import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import LeftBar from "./components/left-bar";
import Home from "./home/home";
import About from "./about/about";
import Skills from "./skills/skills";
import Experience from "./experience/experience";
import Contact from "./contact/contact";
import AppModal from "./modal/modal";
import MobileMenuButton from "./components/mobile-menu-button";
import AppService from "./app-service";
import { setFlagInitRoute } from "./redux/actions";

// Build route strings array. Remove '/' as tihs is the default, added manually
const routes = AppService.pages.map(page => page.route);

const AppRoutes = props => {
  // Move scroll to defined route once, when component is mounted
  useEffect(() => {
    const pageId = AppService.getIdFromRoute(props.location.pathname);
    if (pageId) {
      AppService.setScroll(pageId);
    }
    setFlagInitRoute();
  }, []);

  return (
    <div className="flex h-screen antialiased text-base">
      <LeftBar isLeft={true} />
      <main className="inline-block w-full h-full sm:ml-24 md:ml-32 lg:ml-40">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Switch>
          <Redirect exact from="/" to="/about" />
          {routes.map((myRoute, idx) => (
            <Route key={idx} path={myRoute} children={() => null} />
          ))}
        </Switch>
      </main>
      <AppModal />
      <MobileMenuButton />
    </div>
  );
};

const mapStateToProps = state => ({
  isInitRoute: state.initRoute
});

export default connect(mapStateToProps)(withRouter(AppRoutes));
