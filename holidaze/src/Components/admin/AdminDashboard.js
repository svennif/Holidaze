import React from "react";
import AdminNavbar from "./AdminNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdminCards from "./AdminCards";

function AdminDashboard({ history }) {
  return (
    <>
      <Container>
        <Row className="text-center">
          <Col sm={12} md={12} lg={10}>
            <h1>Admin dashboard</h1>
            <hr />
            <AdminCards/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminDashboard;
