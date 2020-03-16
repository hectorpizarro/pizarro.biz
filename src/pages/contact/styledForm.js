import styled from "styled-components";
import { Form } from "formik";

export default styled(Form)`
  width: 100%;
  padding-top: ${props => props.theme.size.d10};

  display: grid;
  column-gap: ${props => props.theme.size.d3};
  row-gap: ${props => props.theme.size.d2};
  grid-template-columns: 1fr;
  grid-template-rows: ${props => {
    const { d3, d5, d10, d40 } = props.theme.size;
    return `${d5} ${d10} ${d3} ${d5} ${d10} ${d3} ${d5} ${d40} ${d3} ${d3} auto`;
  }};
  grid-template-areas:
    "label_name"
    "field_name"
    "error_name"
    "label_email"
    "field_email"
    "error_email"
    "label_message"
    "field_message"
    "error_message"
    "buttonbar";
  & .label-name {
    grid-area: label_name;
  }
  & .label-email {
    grid-area: label_email;
  }
  & .label-message {
    grid-area: label_message;
  }
  & .field-name {
    grid-area: field_name;
  }
  & .field-email {
    grid-area: field_email;
  }
  & .field-message {
    grid-area: field_message;
  }
  & .error-name {
    grid-area: error_name;
  }
  & .error-email {
    grid-area: error_email;
  }
  & .error-message {
    grid-area: error_message;
  }
  & .status-message {
    grid-area: status;
  }
  & .buttonbar {
    grid-area: buttonbar;
    place-self: center end;
  }
  & .buttonbar button {
    margin-left: ${props => props.theme.size.d4};
  }

  @media (min-width: 640px) {
    padding-left: ${props => props.theme.size.d5};
    padding-right: ${props => props.theme.size.d5};
  }
  @media (min-width: 768px) {
    padding-left: ${props => props.theme.size.d10};
    padding-right: ${props => props.theme.size.d10};
    grid-template-columns: ${props => props.theme.size.d24} 1fr;
    grid-template-rows: ${props => {
      const { d3, d10, d40 } = props.theme.size;
      return `${d10} ${d3} ${d10} ${d3} ${d40} ${d3} ${d3} auto`;
    }};
    grid-template-areas:
      "label_name field_name"
      ". error_name"
      "label_email field_email"
      ". error_email"
      "label_message field_message"
      ". error_message"
      "buttonbar buttonbar";
  }
`;
