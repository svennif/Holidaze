import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function AdminNavbar() {
  return (
    <Nav className=" admin__Navbar d-flex flex-column mt-3">
      <NavLink
        to="/admin/dashboard"
        exact
        className="nav-link admin__Navbar__link"
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/admin/dashboard/enquiries"
        className="nav-link admin__Navbar__link"
      >
        Enquiries
      </NavLink>
      <NavLink
        to="/admin/dashboard/establishments"
        className="nav-link admin__Navbar__link"
      >
        New hotel
      </NavLink>
      <NavLink
        to="/admin/dashboard/messages"
        className="nav-link admin__Navbar__link"
      >
        Messages
      </NavLink>
    </Nav>
  );
}

export default AdminNavbar;
