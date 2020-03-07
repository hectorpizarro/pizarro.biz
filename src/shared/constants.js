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
export const MAIL_URL = "/mail";
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

export const THEME = {
  color: {
    gray100: "#f7fafc",
    gray200: "#edf2f7",
    gray300: "#e2e8f0",
    gray400: "#cbd5e0",
    gray500: "#a0aec0",
    gray700: "#4a5568",
    gray900: "#1a202c",
    red500: "#f56565"
  },
  size: {
    d1: "0.25rem",
    d2: "0.5rem",
    d3: "0.75rem",
    d4: "1rem",
    d5: "1.25rem",
    d6: "1.5rem",
    d8: "2rem",
    d10: "2.5rem",
    d16: "4rem",
    d20: "5rem",
    d24: "6rem",
    d32: "8rem",
    d40: "10rem",
    d1xl: "1.25rem",
    d3xl: "1.875rem"
  },
  fontsize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl1: "1.25rem",
    xl2: "1.5rem",
    xl3: "1.875rem",
    xl4: "2.25rem",
    xl5: "3rem"
  },
  boxShadow:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
};
