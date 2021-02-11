import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

function AdminNavbar({ history }) {
  const logOut = () => {
    history.push("/logout");
    localStorage.clear();
  };
  return (
    <>
      <Nav className=" admin__Navbar d-flex flex-column w-10">
        <NavLink id="home" to="/admin/dashboard" exact className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/admin/dashboard/enquiries" className="nav-link">
          Enquiries
        </NavLink>
        <NavLink to="/admin/dashboard/establishments" className="nav-link">
          Establishments
        </NavLink>
        <NavLink to="/admin/dashboard/messages" className="nav-link">
          Messages
        </NavLink>
        <Button onClick={logOut}>Log out</Button>
      </Nav>
    </>
  );
}

export default AdminNavbar;
