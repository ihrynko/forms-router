import styled from "@emotion/styled";

export const Label = styled.label`
  margin-top: 15px;
  color: #2196f3;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  text-align: start;
`;
export const Input = styled.input`
  margin-top: 4px;
  height: 40px;
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border-color: #2196f3;
    outline: none;
  }
`;

export const Error = styled.span`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: #ff7a7ace;
  text-align: start;
`;
