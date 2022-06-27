import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { StyledNavLink, StyledHeader } from "./Layout.styled";

export default function Layout() {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledNavLink to="final-form">Final Form</StyledNavLink>
          <StyledNavLink to="form">Form</StyledNavLink>
        </nav>
      </StyledHeader>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
