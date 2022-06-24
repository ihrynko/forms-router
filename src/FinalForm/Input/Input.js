import React from "react";
import { Field } from "react-final-form";
// import "./Input.scss";

const Input = ({ title, name, type, autoComplete, placeholder, validator }) => {
  return (
    <Field name={title} validate={validator}>
      {({ input, meta: { touched, error } }) => (
        <div className="group">
          <label htmlFor={name}>{title}</label>
          <input
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            name={name}
            {...input}
          />
          {error && touched && <span className="error">{error}</span>}
        </div>
      )}
    </Field>
  );
};

export default Input;
