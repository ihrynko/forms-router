import styled from "@emotion/styled";

export const StyledLabel = styled.label`
  margin-top: 15px;
  color: #3f51b5;
  font-size: 15px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  text-align: start;
`;
export const StyledInput = styled.input`
  margin-top: 4px;
  height: 40px;
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border-color: #3f51b5;
    outline: none;
  }
`;

export const StyledError = styled.span`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: #ff7a7ace;
  text-align: start;
`;
