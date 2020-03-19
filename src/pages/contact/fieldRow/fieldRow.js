import React from "react";
import styled from "styled-components";
import { Field, ErrorMessage } from "formik";
import { PropTypes } from "prop-types";

const StyledFieldRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: ${props => {
    const { d3, d5, d10, d40 } = props.theme.size;
    return `${d5} ${props.component === "textarea" ? d40 : d10} ${d3}`;
  }};
  grid-template-areas:
    "label_area"
    "field_area"
    "error_area";
  & .label {
    grid-area: label_area;
  }
  & .field {
    grid-area: field_area;
  }
  & .error {
    grid-area: error_area;
  }
  @media (min-width: 768px) {
    column-gap: ${props => props.theme.size.d3};
    row-gap: ${props => props.theme.size.d2};
    grid-template-columns: ${props => props.theme.size.d24} 1fr;
    grid-template-rows: ${props => {
      const { d3, d10, d40 } = props.theme.size;
      return `${props.component === "textarea" ? d40 : d10} ${d3}`;
    }};
    grid-template-areas:
      "label_area field_area"
      ". error_area";
  }
`;

const StyledLabel = styled.label`
  color: ${props =>
    props["data-haserror"] ? props.theme.color.red500 : undefined};
`;

const StyledField = styled(Field)`
  padding: ${props => props.theme.size.d2};
  border-radius: ${props => props.theme.size.d1};
  align-self: stretch;

  border: 1px solid
    ${props =>
      props["data-haserror"]
        ? props.theme.color.red500
        : props.theme.color.gray500};

  ${props =>
    props.disabled
      ? `
      background-color: ${props.theme.color.gray100};
      color: ${props.theme.color.gray500};
    `
      : undefined}
`;

const StyledErrorMessage = styled(ErrorMessage)`
  font-weight: 700;
  font-size: ${props => props.theme.fontsize.xs};
  color: ${props => props.theme.color.red500};
  line-height: 1;
`;

const FieldRow = ({
  errors,
  touched,
  fieldName,
  isSubmitting,
  type,
  labelText,
  component
}) => {
  const hasError = errors && errors[fieldName] && touched && touched[fieldName];

  return (
    <StyledFieldRow component={component}>
      <StyledLabel
        htmlFor={fieldName}
        data-haserror={hasError}
        className="label"
      >
        {labelText}
      </StyledLabel>
      <StyledField
        type={type}
        name={fieldName}
        component={component}
        id={fieldName}
        disabled={isSubmitting}
        data-haserror={hasError}
        className="field"
      />
      <StyledErrorMessage name={fieldName} component="div" className="error" />
    </StyledFieldRow>
  );
};

FieldRow.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  fieldName: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email"]),
  component: PropTypes.oneOf(["input", "select", "textarea"])
};

FieldRow.defaultProps = {
  type: "text",
  component: "input"
};

export default FieldRow;
