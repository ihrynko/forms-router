export const validateName = (value = "") => {
  if (!value.length) {
    return "Required";
  }
  return value.length >= 2 ? false : "Name is too short";
};

export const validateEmail = (value = "") => {
  return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ? false
    : "Email is invalid";
};

export const validatePassword = (value = "") => {
  if (!value.length) {
    return "Required";
  }
  return value.match(
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
  )
    ? false
    : "Password is too simple";
};

export const validatePasswordConfirm = (value = "", password) => {
  if (!value.length) {
    return "Required";
  }
  return value === password ? false : "Passwords dont match";
};
