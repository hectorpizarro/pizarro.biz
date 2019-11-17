import { scroller } from "react-scroll";
import {
  PAGE_HOME,
  PAGE_ABOUT,
  PAGE_SKILLS,
  PAGE_EXPERIENCE,
  PAGE_CONTACT
} from "./constants";

const pages = [
  { id: PAGE_HOME, route: "/home", label: "Home" },
  { id: PAGE_ABOUT, route: "/about", label: "About" },
  { id: PAGE_SKILLS, route: "/skills", label: "Skills" },
  { id: PAGE_EXPERIENCE, route: "/experience", label: "Experience" },
  { id: PAGE_CONTACT, route: "/contact", label: "Contact" }
];

// If value is numeric return as Number, not string
const getValue = myValue => (/^\d+$/.test(myValue) ? Number(myValue) : myValue);

/**
 * Used on any button click, prevents event default action and propagation and returns 'data-id' value.
 * @param {Object} event - Click event
 */
const getClickId = event => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  return getValue(event.currentTarget.getAttribute("data-id"));
};

const getIdFromRoute = route => {
  const foundPage = pages.find(page => page.route === route);
  return foundPage ? foundPage.id : null;
};

const getRouteFromId = id => {
  const foundPage = pages.find(page => page.id === id);
  return foundPage ? foundPage.route : null;
};

const setScroll = (pageId, duration = 1000) => {
  scroller.scrollTo(pageId, {
    duration,
    smooth: "easeInOutQuad"
  });
};

const AppService = {
  pages,
  getClickId,
  setScroll,
  getIdFromRoute,
  getRouteFromId
};

export default AppService;
