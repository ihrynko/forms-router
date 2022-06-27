import React from "react";
import {
  StyledGroup,
  StyledLabel,
  StyledInput,
  StyledError,
} from "./Input.styled.js";

const Field = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
  error,
  title,
}) => {
  return (
    <StyledGroup>
      <StyledLabel> {title} </StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
        value={value}
        onChange={onChange}
      />
      <StyledError>{error.length > 0 && error}</StyledError>
    </StyledGroup>
  );
};

export default Field;
