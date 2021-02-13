import React from "react";
import AdminNavbar from "./AdminNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AdminDashboard({ history }) {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={2}>
            <AdminNavbar  history={history} />
          </Col>
          <Col sm={12} md={12} lg={10}>
            <h1>Hello world</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminDashboard;
