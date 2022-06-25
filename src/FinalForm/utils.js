import { emailPattern, passwordPattern } from "./patterns";

const required = (value) => (value ? undefined : "Required");

const validateName = (value) =>
  value.length >= 2 ? undefined : "Name is too short";

const validateEmail = (value) =>
  emailPattern.test(value) ? undefined : "Email is invalid";

const validatePassword = (value) =>
  passwordPattern.test(value) ? undefined : "Password is too simple";

const validatePasswordConfirm = (value, allValues) =>
  value === allValues.password ? undefined : "Passwords dont match";

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
  passwordConfirm: composeValidators(required, validatePasswordConfirm),
};
