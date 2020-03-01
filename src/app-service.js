/**
 * Methods used on whole app.
 */
import { scroller } from "react-scroll";
import { PAGES, MAIL_URL } from "./constants";
import Axios from "axios";
/**
 * If provided myValue is an integer as string returns Number.
 * @param {(Number|String)} myValue - A value, can be string or number.
 * @returns {(Number|String)} Value
 */
const getValue = myValue => (/^\d+$/.test(myValue) ? Number(myValue) : myValue);

/**
 * Used on any button click, prevents event default action and propagation and returns 'data-id' value.
 * @param {Object} event - Click event
 * @returns {(Number|String)} Value inside data-id
 */
const getClickId = event => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  return getValue(event.currentTarget.getAttribute("data-id"));
};

/**
 * Moves scroll to provided page.
 * @param {String} pageId - Page id
 * @param {Number} duration - Optional, animation duration in ms. Default 1 sec
 */
const setScroll = (pageId, duration = 1000) => {
  scroller.scrollTo(pageId, {
    duration,
    smooth: "easeInOutQuad"
  });
};

/**
 * Returns page id related to provided route, NULL if not found.
 * @param {String} route - A route, see PAGES in constants.js
 * @returns {(String|null)} Page id
 */
const getIdFromRoute = route => {
  const foundPage = PAGES.find(page => page.route === route);
  return foundPage ? foundPage.id : null;
};

/**
 * Returns route related to provided page id, NULL if not found.
 * @param {String} pageId - Page id
 * @returns {(String|Null)} Route string
 */
const getRouteFromId = pageId => {
  const foundPage = PAGES.find(page => page.id === pageId);
  return foundPage ? foundPage.route : null;
};

/**
 * Prevents click and returns false to stop click behavior.
 * @param {Object} event - Click event
 */
const noop = event => {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

export const sendMail = async values => {
  try {
    await Axios.post(MAIL_URL, values);
    return true;
  } catch (error) {
    console.log("sendMail error:", error);
    return false;
  }
};

const AppService = {
  getClickId,
  setScroll,
  getIdFromRoute,
  getRouteFromId,
  noop
};

export default AppService;
