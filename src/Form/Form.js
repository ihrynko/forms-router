import { Component } from "react";
import {
  FormWrappper,
  ButtonsContainer,
  ButtonReset,
  ButtonSubmit,
} from "./Form.styled.js";
import Field from "./Input";
import initialState from "./state";

class Form extends Component {
  state = {
    ...initialState,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { fields, isError } = this.state;
    const { password, passwordConfirm } = this.state.fields;
    let updatedFields = {};
    let updatedIsError = isError;

    Object.entries(fields).map(([fieldName, fieldState]) => {
      const error = fieldState.validator(fieldState.value, {
        passwordConfirm: (passwordConfirm.value, password.value),
      });

      updatedFields[fieldName] = { ...fieldState, error };
      updatedIsError = error;
    });

    this.setState(
      {
        fields: updatedFields,
        isError: updatedIsError,
      },
      () => {
        if (!isError) {
          this.handleReset();
        }
      }
    );
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;
    const { password, passwordConfirm } = this.state.fields;
    const currentField = this.state.fields[name];

    const error = currentField.validator(value, password.value);

    if (name === "password") {
      const passwordConfirmError = passwordConfirm.validator(
        passwordConfirm.value,
        value
      );
      this.setState({
        fields: {
          ...this.state.fields,
          [name]: { ...currentField, value, error },
          passwordConfirm: {
            ...this.state.fields.passwordConfirm,
            error: passwordConfirmError,
          },
        },
      });
    } else
      this.setState({
        fields: {
          ...this.state.fields,
          [name]: { ...currentField, value, error },
        },
      });
  };

  handleReset = () => {
    this.setState({ ...initialState });
  };

  handleSubmitButton = () => {
    const { fields } = this.state;
    let errors = [];
    let values = [];

    Object.entries(fields).forEach(([fieldName, fieldState]) => {
      let error = fieldState.error;
      if (fieldName !== "email") {
        let value = fieldState.value;
        values.push(value);
      }
      errors.push(error);
    });

    const isNotError = errors.every((error) => error === false);
    const isNotEmptyField = values.every((value) => value !== "");

    if (isNotError && isNotEmptyField) {
      return false;
    }

    return true;
  };

  render() {
    const { fields } = this.state;
    return (
      <FormWrappper onSubmit={this.handleSubmit} onReset={this.handleReset}>
        {Object.entries(fields).map(([fieldName, fieldState]) => {
          const { title, name, type, autoComplete, placeholder, error, value } =
            fieldState;
          return (
            <Field
              key={fieldName}
              title={title}
              autoComplete={autoComplete}
              type={type}
              error={error}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={this.handleOnChange}
            />
          );
        })}
        <ButtonsContainer>
          <ButtonReset type="reset">Reset</ButtonReset>
          <ButtonSubmit disabled={this.handleSubmitButton()} type="submit">
            Submit
          </ButtonSubmit>
        </ButtonsContainer>
      </FormWrappper>
    );
  }
}

export default Form;
