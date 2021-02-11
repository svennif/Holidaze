import React, { useState } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";
import AdminNavbar from "./AdminNavbar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Messages({ history }) {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    const messageUrl = BASE_URL + "contacts";
    fetch(messageUrl, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  getMessages();
  return (
    <Container className="mt-3">
      <Row>
        <Col sm={2} className="ml-0">
          <AdminNavbar history={history} />
        </Col>
      </Row>
    </Container>
  );
}

export default Messages;
