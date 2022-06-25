const required = (value) => {
  if (!value) {
    return "Required";
  }
};

const validateName = (value) => {
  if (!value.length >= 2) {
    return "Name is too short";
  }
};

const validateEmail = (value) => {
  if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    return "Email is invalid";
  }
};

const validatePassword = (value) => {
  if (
    !value.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)
  ) {
    return "Password is too simple";
  }
};

const validatePasswordConfirm = (value, allValues) => {
  if (value !== allValues.password) {
    return "Passwords dont match";
  }
};

const composeValidators =
  (...validators) =>
  (value, allValues) =>
    validators.reduce(
      (error, validator) => error || validator(value, allValues),
      undefined
    );

export const validation = {
  name: composeValidators(required, validateName),
  email: validateEmail,
  password: composeValidators(required, validatePassword),
  confirmPassword: composeValidators(required, validatePasswordConfirm),
};
