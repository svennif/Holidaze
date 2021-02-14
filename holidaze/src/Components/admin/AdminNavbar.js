import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import Logout from "../auth/Logout";

function AdminNavbar() {
  return (
    <Nav className=" admin__Navbar d-flex flex-column">
      <Logout />

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
        to="/admin/dashboard/messages"
        className="nav-link admin__Navbar__link"
      >
        Messages
      </NavLink>
      <NavDropdown title="Hotels" className="admin__Navbar__dropdown">
        <NavLink
          to="/admin/dashboard/establishments/new"
          className="nav-link admin__Navbar__link"
        >
          New hotel
        </NavLink>
        <NavLink
          to="/admin/dashboard/establishments/update"
          className="nav-link admin__Navbar__link"
        >
          Update hotel
        </NavLink>
      </NavDropdown>
    </Nav>
  );
}

export default AdminNavbar;
