import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function MessageDisplay({ name, email, message, createdAt, id }) {
  return (
    <Accordion defaultActiveKey={id}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>
              <strong>Email: </strong>
              {email}
            </p>
            <p>
              <strong>Message: </strong>
              {message}
            </p>
            <p>
              <strong>Sent at: </strong>
              {createdAt}
            </p>
            <p>
              <strong>Id: </strong>
              {id}
            </p>
            <Button className="enquiry__button">
              <Link
                className="enquiry__button__link"
                to={{
                  pathname: `/admin/dashboard/messages/detail/${id}`,
                  state: { name },
                }}
              >
                Go to details
              </Link>
            </Button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default MessageDisplay;
