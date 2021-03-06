import styled from "@emotion/styled";

export const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const StyledLabel = styled.label`
  text-align: start;
  font-size: 18px;
`;
export const StyledInput = styled.input`
  margin: 0;
  margin-top: 6px;
  min-width: 300px;
  height: 37px;
  padding: 0px 10px;
  text-align: center;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  background-color: #f3f3f3;
  border: 0;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: all 250ms ease-in-out;
  &:hover {
    background-color: #ffffff;
    box-shadow: 0px 0px 14px 0.3px #0e81ce96;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 12px 0.8px #3474dbb2;
  }
`;

export const StyledError = styled.span`
  position: relative;
  display: flex;
  top: -8px;
  height: 20px;
  background-color: #ff7a7ace;
  box-shadow: 0px 0px 14px 0.3px #ff0000ce;
  border-radius: 7px;
`;
