/**
 * Functions that trigger async requests, usually agains an external resource like an API or a Mail Service.
 */
import Axios from "axios";
import { MAIL_URL } from "../constants";
// import { showToast } from "./toast.actions";

/**
 * Sends email. Show toast on success/error.
 * @param {Object} values - Form field values
 * @returns {Boolean} TRUE on success
 */
export const sendMail = async values => {
  try {
    await Axios.post(MAIL_URL, values);
    // showToast("Your message was delivered.", true);
    return true;
  } catch (error) {
    console.log("sendMail error:", error);
    // showToast(
    //   "There was an error sending your message, please try again.",
    //   false
    // );
    return false;
  }
};
