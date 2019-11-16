import React from "react";
import { string as yupString, object as yupObject } from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import Axios from "axios";
import Section from "../shared/section/section";
import Button from "../shared/button";

import "./contact.css";
import { PAGE_CONTACT } from "../constants";
import { showToast } from "../redux/toast.actions";

const fadeInAnimation = keyframes`${fadeIn}`;

const ContactContent = styled(Section)`
  animation: 2s ${fadeInAnimation};
`;

const initState = {
  name: "",
  email: "",
  message: ""
};

const schema = yupObject().shape({
  name: yupString()
    .min(3, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  email: yupString()
    .email("Invalid email")
    .required("Required"),
  message: yupString()
    .min(3, "Too Short!")
    .max(1024, "Too Long!")
    .required("Required")
});

// Defined actions: resetForm, setStatus
const onSubmit = async (values, actions) => {
  try {
    await Axios.post("/mail.php", values);
    actions.resetForm();
    showToast("Your message was delivered.", true);
  } catch (error) {
    showToast(
      "There was an error sending your message, please try again.",
      false
    );
  }
};

const renderForm = ({ errors, status, touched, isSubmitting }) => (
  <Form className="container-grid w-full pt-10 sm:px-5 md:px-10">
    <label
      htmlFor="name"
      className={`label label-name ${
        errors.name && touched.name ? "text-red-500" : ""
      }`}
    >
      Name:
    </label>
    <Field
      type="text"
      name="name"
      id="name"
      className={`field-name p-2 rounded border self-stretch ${
        errors.name && touched.name ? "border-red-500" : "border-gray-500"
      }`}
    />
    <ErrorMessage
      name="name"
      component="div"
      className="error-name font-bold text-xs text-red-500 leading-none"
    />
    <label
      htmlFor="email"
      className={`label label-email ${
        errors.email && touched.email ? "text-red-500" : ""
      }`}
    >
      Email *:
    </label>
    <Field
      type="email"
      name="email"
      id="email"
      className={`field-email p-2 rounded border self-stretch ${
        errors.email && touched.email ? "border-red-500" : "border-gray-500"
      }`}
    />
    <ErrorMessage
      name="email"
      component="div"
      className="error-email font-bold text-xs text-red-500 leading-none"
    />
    <label
      htmlFor="message"
      className={`label label-message ${
        errors.message && touched.message ? "text-red-500" : ""
      }`}
    >
      Message:
    </label>
    <Field
      component="textarea"
      name="message"
      id="message"
      className={`field-message p-2 rounded border self-stretch ${
        errors.message && touched.message ? "border-red-500" : "border-gray-500"
      }`}
    />
    <ErrorMessage
      name="message"
      component="div"
      className="error-message font-bold text-xs text-red-500 leading-none"
    />
    <div className="buttonbar">
      <Button type="reset" inverse disabled={isSubmitting} label="Reset" />
      <Button type="submit" disabled={isSubmitting} label="Submit" />
    </div>
  </Form>
);

const Contact = () => {
  return (
    <ContactContent name={PAGE_CONTACT} title="Contact" withFooter>
      <div>
        <p>
          Let's work together! You can always reach me at my mail or sending me
          a message here:
        </p>
        <Formik
          initialValues={{ ...initState }}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {renderForm}
        </Formik>
      </div>
    </ContactContent>
  );
};

export default Contact;
