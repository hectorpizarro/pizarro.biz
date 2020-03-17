import React from "react";
import styled from "styled-components";
import { Field, ErrorMessage } from "formik";
import { PropTypes } from "prop-types";

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
  return (
    <>
      <StyledLabel
        htmlFor={fieldName}
        data-haserror={errors[fieldName] && touched[fieldName]}
        className={`label-${fieldName}`}
      >
        {labelText}
      </StyledLabel>
      <StyledField
        type={type}
        name={fieldName}
        component={component}
        id={fieldName}
        disabled={isSubmitting}
        data-haserror={errors[fieldName] && touched[fieldName]}
        className={`field-${fieldName}`}
      />
      <StyledErrorMessage
        name={fieldName}
        component="div"
        className={`error-${fieldName}`}
      />
    </>
  );
};

FieldRow.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  fieldName: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  type: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  component: PropTypes.string
};

FieldRow.defaultProps = {
  type: "",
  component: "input"
};

export default FieldRow;
