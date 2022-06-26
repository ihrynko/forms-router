import React from "react";
import { Field } from "react-final-form";
import { Label, Input, Error } from "./Input.styled";

const InputField = ({
  title,
  name,
  type,
  autoComplete,
  placeholder,
  validator,
}) => {
  return (
    <Field name={name} validate={validator}>
      {({ input, meta: { touched, error } }) => (
        <div>
          <Label htmlFor={name}>{title}</Label>
          <Input
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            name={name}
            value={input.value}
            onChange={input.onChange}
          />

          {touched && error && <Error>{error}</Error>}
        </div>
      )}
    </Field>
  );
};

export default InputField;
