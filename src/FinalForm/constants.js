import { validation } from "./utils";

const initialValues = {
  fields: {
    name: {
      title: "Name",
      type: "name",
      name: "name",
      placeholder: "Input your name..",
      validator: validation.name,
    },

    email: {
      title: "Email",
      type: "email",
      name: "email",
      placeholder: "Input your email..",
      validator: validation.email,
    },
    password: {
      title: "Password",
      type: "password",
      name: "password",
      autoComplete: "false",
      placeholder: "Input your password..",
      validator: validation.password,
    },
    passwordConfirm: {
      title: "Password confirm",
      type: "password",
      name: "passwordConfirm",
      autoComplete: "false",
      placeholder: "Confirm your password..",
      validator: validation.passwordConfirm,
    },
  },
};

export default initialValues;
