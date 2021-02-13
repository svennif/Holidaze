import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function MessageDisplay({ name, email, message, createdAt, id }) {
  return (
    <Accordion defaultActiveKey={id}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>{email}</p>
            <p>{message}</p>
            <p>{createdAt}</p>
            <p>{id}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default MessageDisplay;
