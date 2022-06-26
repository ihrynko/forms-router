import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Link, Header } from "./Layout.styled";

export default function Layout() {
  return (
    <>
      <Header>
        <nav>
          <Link to="final-form">Final Form</Link>
          <Link to="form">Form</Link>
        </nav>
      </Header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
