import React from "react";
import { ThemeProvider } from "styled-components";
import withFormik from "storybook-formik";
import { THEME } from "../../../shared/constants";
import GlobalStyle from "../../../globalStyle";
import FieldRow from "./fieldRow";

const addDecorator = storyFn => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle />
    <div style={{ margin: "10px" }}>{storyFn()}</div>
  </ThemeProvider>
);

export default {
  title: "Pages / 5 Contact - FieldRow",
  component: FieldRow,
  parameters: {
    notes:
      "Contact page - Field Row: Field label, field and error message in a block.",
    viewport: { defaultViewport: "desktop" },
    formik: {
      initialValues: {
        testField01: "test value"
      }
    }
  },
  decorators: [addDecorator, withFormik]
};

export const Input = () => (
  <FieldRow
    errors={{}}
    touched={{}}
    fieldName="testField01"
    isSubmitting={false}
    labelText="Test Field"
  />
);

export const InputError = () => (
  <FieldRow
    errors={{
      testField01: "error message"
    }}
    touched={{
      testField01: true
    }}
    fieldName="testField01"
    isSubmitting={false}
    labelText="Test Field"
  />
);
InputError.story = {
  parameters: {
    formik: {
      initialErrors: {
        testField01: "error message"
      },
      initialTouched: {
        testField01: true
      }
    }
  }
};

export const TextArea = () => (
  <FieldRow
    errors={{}}
    touched={{}}
    fieldName="testField01"
    isSubmitting={false}
    labelText="Test Field"
    component="textarea"
  />
);

export const TextAreaError = () => (
  <FieldRow
    errors={{
      testField01: "error message"
    }}
    touched={{
      testField01: true
    }}
    fieldName="testField01"
    isSubmitting={false}
    labelText="Test Field"
    component="textarea"
  />
);
TextAreaError.story = {
  parameters: {
    formik: {
      initialErrors: {
        testField01: "error message"
      },
      initialTouched: {
        testField01: true
      }
    }
  }
};

export const InputSubmitting = () => (
  <FieldRow
    errors={{}}
    touched={{}}
    fieldName="testField01"
    isSubmitting
    labelText="Test Field"
  />
);

export const TextAreaSubmitting = () => (
  <FieldRow
    errors={{}}
    touched={{}}
    fieldName="testField01"
    isSubmitting
    labelText="Test Field"
    component="textarea"
  />
);

export const InputMobile = () => (
  <FieldRow
    errors={{}}
    touched={{}}
    fieldName="testField01"
    isSubmitting={false}
    labelText="Test Field"
  />
);
InputMobile.story = {
  parameters: {
    viewport: { defaultViewport: "iphone5" }
  }
};

export const TextAreaMobile = () => (
  <FieldRow
    errors={{}}
    touched={{}}
    fieldName="testField01"
    isSubmitting={false}
    labelText="Test Field"
    component="textarea"
  />
);
TextAreaMobile.story = {
  parameters: {
    viewport: { defaultViewport: "iphone5" }
  }
};
