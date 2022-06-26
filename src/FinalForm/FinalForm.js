import React, { Component } from "react";
import { Form } from "react-final-form";
import initialValues from "./constants";
import InputField from "./Input";
import {
  FormWrapper,
  Group,
  ButtonsContainer,
  Button,
} from "./FinalForm.styled";

class FinalForm extends Component {
  onSubmit = (values) => {
    console.log(values);
  };

  render() {
    const { fields } = initialValues;

    return (
      <FormWrapper>
        <h1>Final Form</h1>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, form, submitting, pristine, errors }) => (
            <form onSubmit={handleSubmit}>
              <Group>
                {Object.entries(fields).map(([fieldName, fieldState]) => {
                  const {
                    title,
                    name,
                    type,
                    autoComplete,
                    placeholder,
                    validator,
                  } = fieldState;
                  return (
                    <InputField
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
              </Group>
              <ButtonsContainer>
                <Button onClick={form.reset}>Reset</Button>
                <Button disabled={submitting || pristine} type="submit">
                  Submit
                </Button>
              </ButtonsContainer>
            </form>
          )}
        />
      </FormWrapper>
    );
  }
}
export default FinalForm;
