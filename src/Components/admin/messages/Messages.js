import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../Api";
import AdminNavbar from "../AdminNavbar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MessageDisplay from "./MessageDisplay";

function Messages({ history }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const options = { headers };
    const messageUrl = BASE_URL + "contacts";
    fetch(messageUrl, options)
      .then((res) => res.json())
      .then((j) => {
        console.log(j);
        setMessages(j);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col sm={2} className="ml-0">
          <AdminNavbar history={history} />
        </Col>
        <Col>
          <h1>Messages</h1>
          <hr />
          {messages &&
            messages.map(({ name, email, message, createdAt, id }) => {
              return (
                <MessageDisplay
                  name={name}
                  id={id}
                  key={id}
                  email={email}
                  message={message}
                  createdAt={createdAt}
                />
              );
            })}
        </Col>
      </Row>
    </Container>
  );
}

export default Messages;
