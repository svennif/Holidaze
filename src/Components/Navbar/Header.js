import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar variant="dark" bg="dark" collapseOnSelect expand="lg">
      <NavLink to="/" exact>
        <Navbar.Brand className="navbar-title">Holidaze</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavLink id="home" to="/" exact className="nav-link">
            Home
          </NavLink>
          <NavLink to="/allhotels" exact className="nav-link">
            Hotels
          </NavLink>
          <NavLink id="contact" to="/contact" className="nav-link">
            Contact
          </NavLink>
          <NavLink id="admin" to="/admin" className="nav-link">
            Admin
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
