import React from "react";
import { string as yupString, object as yupObject } from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import Button from "../../shared/button";
import "./contact.css";
import { CONTACT_INIT_STATE } from "../../shared/constants";
import { sendMail } from "../../shared/app-service";
import { doShowToast } from "../../shared/toast/ducks";

/**
 * Configuration object for Yup schema validator. See:
 * https://github.com/jquense/yup
 */
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

/**
 * Formik Form component to render inside HTML form. Receives Formik props,
 * see https://jaredpalmer.com/formik/docs/api/formik
 * DOM node is rendered in a CSS grid.
 * @param {Object} param - Params object received from Formik.
 * @returns {Object} - Form formik object.
 */
const renderForm = ({ errors, status, touched, isSubmitting }) => {
  return (
    <Form className="container-grid w-full pt-10 sm:px-5 md:px-10">
      <label
        htmlFor="name"
        className={`label label-name ${
          errors.name && touched.name ? "text-red-500" : ""
        }`}
      >
        Name *:
      </label>
      <Field
        type="text"
        name="name"
        id="name"
        className={`field-name p-2 rounded border self-stretch ${
          errors.name && touched.name ? "border-red-500" : "border-gray-500"
        } ${isSubmitting ? "bg-gray-100 text-gray-500" : ""}`}
        disabled={isSubmitting}
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
        } ${isSubmitting ? "bg-gray-100 text-gray-500" : ""}`}
        disabled={isSubmitting}
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
        Message *:
      </label>
      <Field
        component="textarea"
        name="message"
        id="message"
        className={`field-message p-2 rounded border self-stretch ${
          errors.message && touched.message
            ? "border-red-500"
            : "border-gray-500"
        } ${isSubmitting ? "bg-gray-100 text-gray-500" : ""}`}
        disabled={isSubmitting}
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
};

/**
 * Contact page
 * @returns {Object} - DIV DOM node.
 */
const Contact = () => {
  const dispatch = useDispatch();

  /**
   * Callback executed on Form submit. For details on 'actions' parameter see:
   * https://jaredpalmer.com/formik/docs/api/formik#onsubmit-values-values-formikbag-formikbag-gt-void
   * @param {Object} values - Form field values.
   * @param {Object} actions - Form onSubmit 'FormikBag' {resetForm, setStatus, ...}
   */
  const onSubmit = async (values, actions) => {
    const isSuccess = await sendMail(values); // wait async method to send mail
    if (isSuccess) {
      actions.resetForm(); // mail sent, reset form
      dispatch(doShowToast("Your message was delivered.", true));
    } else {
      actions.setSubmitting(false); // mail failed, turn off Form flag
      dispatch(
        doShowToast(
          "There was an error sending your message, please try again.",
          false
        )
      );
    }
  };

  return (
    <div>
      <p>
        Let's work together! You can always reach me at my mail or sending me a
        message here:
      </p>
      <Formik
        initialValues={{ ...CONTACT_INIT_STATE }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {renderForm}
      </Formik>
    </div>
  );
};

export default React.memo(Contact);
