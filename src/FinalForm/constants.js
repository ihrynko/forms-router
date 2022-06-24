import { validation } from "./validation";

const initialValues = {
  fields: {
    name: {
      title: "Name",
      type: "name",
      name: "name",
      value: "",
      placeholder: "Input your name..",
      validator: validation.name,
    },

    email: {
      title: "Email",
      type: "email",
      name: "email",
      value: "",
      placeholder: "Input your email..",
      validator: validation.email,
    },
    password: {
      title: "Password",
      type: "password",
      name: "password",
      autoComplete: "false",
      value: "",
      placeholder: "Input your password..",
      validator: validation.password,
    },
    passwordConfirm: {
      title: "Password confirm",
      type: "password",
      name: "passwordConfirm",
      autoComplete: "false",
      value: "",
      placeholder: "Confirm your password..",
      validator: validation.confirmPassword,
    },
  },
};

export default initialValues;
