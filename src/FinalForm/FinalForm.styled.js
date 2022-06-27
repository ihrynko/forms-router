import styled from "@emotion/styled";

export const StyledFormWrapper = styled.div`
  max-width: 300px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0 auto;
  padding: 40px;
`;

export const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const StyledButton = styled.button`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: #3f51b5;
  cursor: pointer;
  pointer-events: all;
  padding: 10px 15px;
  border: 1px solid transparent;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
