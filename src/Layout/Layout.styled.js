import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: black;
  font-size: 18px;
  &.active {
    color: #3f51b5;
  }
`;

export const StyledHeader = styled.header`
  border-bottom: 1px solid #3f51b5;
  padding: 10px;
  margin-bottom: 25px;
`;
