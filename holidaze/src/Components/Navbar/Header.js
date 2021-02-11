import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <Navbar variant="dark" bg="dark" collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/" exact>
          <Navbar.Brand className="navbar-title">Holidaze</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ">
            <NavLink id="home" to="/" exact className="nav-link">
              Home
            </NavLink>
            <NavLink to="/hotels" exact className="nav-link">
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
      </Container>
    </Navbar>
  );
}

export default Header;
