import React from "react";
import { Group, Label, Input, Error } from "./Input.styled.js";

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
    <Group>
      <Label> {title} </Label>
      <Input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
        value={value}
        onChange={onChange}
      />
      <Error>{error.length > 0 && error}</Error>
    </Group>
  );
};

export default Field;
