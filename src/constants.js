/**
 * Constants used in the whole app. This is used as a configuration file
 * for the App.
 */
export const PAGE_HOME = "PAGE_HOME"; // Home page id
export const PAGE_ABOUT = "PAGE_ABOUT"; // About page id
export const PAGE_SKILLS = "PAGE_SKILLS"; // Skills page id
export const PAGE_EXPERIENCE = "PAGE_EXPERIENCE"; // Experience page id
export const PAGE_CONTACT = "PAGE_CONTACT"; // Contact page id
// All pages, used for routing and navbar
export const PAGES = [
  { id: PAGE_HOME, route: "/home", label: "Home" },
  { id: PAGE_ABOUT, route: "/about", label: "About" },
  { id: PAGE_SKILLS, route: "/skills", label: "Skills" },
  { id: PAGE_EXPERIENCE, route: "/experience", label: "Experience" },
  { id: PAGE_CONTACT, route: "/contact", label: "Contact" }
];

// Delay before closing modal. Used for fade out animation.
export const MODAL_CLOSE_TIME = 600;
// Mobile menu modal id
export const MODAL_HEADER_MENU = "MODAL_HEADER_MENU";
// Modal id to show a selected experience card.
export const MODAL_EXPERIENCE = "MODAL_EXPERIENCE";
// Time in ms to close toast message automatically
export const TOAST_EXP_TIME = "3000";
// Url for mail endpoint. In development environment uses mockserver to fake
// mail flow.
export const MAIL_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8081/mail.php"
    : "/mail.php";
export const GOOGLE_ANALYTICS_KEY =
  process.env.NODE_ENV === "development" ? "" : "UA-152898995-1";
// Contact page form initial field values
export const CONTACT_INIT_STATE = {
  name: "",
  email: "",
  message: ""
};
// Skills page: sections list.
export const SKILLS_SECTIONS = ["advanced", "intermediate", "novice"];

export const SLIDER_SETTINGS = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500
};
