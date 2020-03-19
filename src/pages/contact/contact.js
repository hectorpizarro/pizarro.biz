import React from "react";
import { string as yupString, object as yupObject } from "yup";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import Button from "../../shared/button/button";
import { CONTACT_INIT_STATE } from "../../shared/constants";
import { sendMail } from "../../shared/appService";
import { doShowToast } from "../../shared/toast/toast.slice";
import FieldRow from "./fieldRow/fieldRow";

const StyledContact = styled.div`
  @media (min-width: 640px) {
    padding: 0 ${props => props.theme.size.d5};
  }
  @media (min-width: 768px) {
    padding: 0 ${props => props.theme.size.d10};
  }
`;

const StyledForm = styled(Form)`
  width: 100%;
  padding-top: ${props => props.theme.size.d10};
`;

const StyledButtonBar = styled.div`
  text-align: end;
  & button {
    margin-left: ${props => props.theme.size.d4};
  }
`;

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

// Form using formik, see: https://jaredpalmer.com/formik/docs/api/formik

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
    <StyledContact>
      <p>
        Let&apos;s work together! You can always reach me at my mail or sending
        me a message here:
      </p>
      <Formik
        initialValues={{ ...CONTACT_INIT_STATE }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <StyledForm>
            <FieldRow
              errors={errors}
              touched={touched}
              fieldName="name"
              isSubmitting={isSubmitting}
              type="text"
              labelText="Name *:"
            />
            <FieldRow
              errors={errors}
              touched={touched}
              fieldName="email"
              isSubmitting={isSubmitting}
              type="email"
              labelText="Email *:"
            />
            <FieldRow
              component="textarea"
              errors={errors}
              touched={touched}
              fieldName="message"
              isSubmitting={isSubmitting}
              labelText="Message *:"
            />
            <StyledButtonBar>
              <Button
                type="reset"
                inverse
                disabled={isSubmitting}
                label="Reset"
              />
              <Button type="submit" disabled={isSubmitting} label="Submit" />
            </StyledButtonBar>
          </StyledForm>
        )}
      </Formik>
    </StyledContact>
  );
};

export default Contact;
