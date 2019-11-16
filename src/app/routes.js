import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./nav-bar";
import Home from "../home/home";
import About from "../about/about";
import Skills from "../skills/skills";
import Experience from "../experience/experience";
import Contact from "../contact/contact";
import AppModal from "../shared/modal/modal";
import MobileMenuButton from "./mobile-menu-button";
import AppService from "../app-service";
import { setFlagInitRoute } from "../redux/misc.actions";
import Toast from "../shared/toast/toast";

// Build route strings array. Remove '/' as tihs is the default, added manually
const routes = AppService.pages.map(page => page.route);

const Routes = props => {
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
      <Toast />
      <NavBar isLeft={true} />
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
  isInitRoute: state.misc.initRoute
});

export default connect(mapStateToProps)(withRouter(Routes));
