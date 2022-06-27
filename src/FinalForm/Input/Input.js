import React from "react";
import { Field } from "react-final-form";
import { StyledLabel, StyledInput, StyledError } from "./Input.styled";

const Input = ({ title, name, type, autoComplete, placeholder, validator }) => {
  return (
    <Field name={name} validate={validator}>
      {({ input, meta: { touched, error } }) => (
        <div>
          <StyledLabel htmlFor={name}>{title}</StyledLabel>
          <StyledInput
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            name={name}
            value={input.value}
            onChange={input.onChange}
          />

          {touched && error && <StyledError>{error}</StyledError>}
        </div>
      )}
    </Field>
  );
};

export default Input;
