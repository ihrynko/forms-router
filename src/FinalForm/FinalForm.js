import React, { Component } from "react";
import { Form } from "react-final-form";
import { toast } from "react-toastify";
import initialValues from "./constants";
import Input from "./Input";
import {
  StyledFormWrapper,
  StyledGroup,
  StyledButtonsContainer,
  StyledButton,
} from "./FinalForm.styled";

class FinalForm extends Component {
  onSubmit = () => toast("Submitted!");

  render() {
    const { fields } = initialValues;

    return (
      <StyledFormWrapper>
        <h1>Final Form</h1>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit} onReset={form.reset}>
              <StyledGroup>
                {Object.entries(fields).map(([fieldName, fieldValue]) => {
                  const {
                    title,
                    name,
                    type,
                    autoComplete,
                    placeholder,
                    validator,
                  } = fieldValue;
                  return (
                    <Input
                      key={fieldName}
                      title={title}
                      autoComplete={autoComplete}
                      type={type}
                      placeholder={placeholder}
                      name={name}
                      validator={validator}
                    />
                  );
                })}
              </StyledGroup>
              <StyledButtonsContainer>
                <StyledButton type="reset">Reset</StyledButton>
                <StyledButton disabled={submitting || pristine} type="submit">
                  Submit
                </StyledButton>
              </StyledButtonsContainer>
            </form>
          )}
        />
      </StyledFormWrapper>
    );
  }
}
export default FinalForm;
