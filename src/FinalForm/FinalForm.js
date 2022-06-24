import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import initialValues from "./constants";
// export { combiValidators } from "./validation";
import Input from "./Input";

class FinalForm extends Component {
  onSubmit = (values) => {
    console.log(values);
  };

  render() {
    const { fields } = initialValues;

    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, reset, submitting }) => (
          <form className="form" onSubmit={handleSubmit} onReset={reset}>
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
            <div className="button-container"></div>
            <button onClick={reset} className="button">
              Reset
            </button>
            <button
              className="button submit"
              disabled={submitting}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      />
    );
  }
}
export default FinalForm;
