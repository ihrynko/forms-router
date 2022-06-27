import styled from "@emotion/styled";

export const StyledFormWrappper = styled.form`
  width: 290px;
  margin: 0 auto;
  padding-bottom: 30px;
  padding-top: 30px;
`;
export const StyledButtonsContainer = styled.div`
  display: flex;
`;
export const StyledButtonReset = styled.button`
  margin-right: 10px;
  padding: 10px;
  min-width: 120px;
  background-color: rgb(81, 81, 251);
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
  transition-property: color, background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: rgb(81, 81, 251);
    background-color: #ffffff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
export const StyledButtonSubmit = styled.button`
  margin-right: 10px;
  padding: 10px;
  min-width: 120px;
  color: rgb(81, 81, 251);
  background-color: #ffffff;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;

  border: none;
  pointer-events: none;
  cursor: not-allowed;
  transition-property: color, background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: rgb(81, 81, 251);
    background-color: #ffffff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
  &:not(:disabled) {
    cursor: pointer;
    pointer-events: all;
    background-color: rgb(81, 81, 251);
    color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
