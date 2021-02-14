import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function EnquiryDisplay({
  name,
  email,
  createdAt,
  establishmentId,
  checkIn,
  checkOut,
  id,
}) {
  return (
    <Accordion defaultActiveKey={id} className="enquiry">
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
              <strong>Created at: </strong>
              {createdAt}
            </p>
            <p>
              <strong>Id: </strong> {id}
            </p>
            <p>
              <strong>Establishment id: </strong>
              {establishmentId}
            </p>
            <p>
              <strong>Check in: </strong>
              {checkIn}
            </p>
            <p>
              <strong>Check out: </strong>
              {checkOut}
            </p>
            <Button className="enquiry__button">
              <Link
                className="enquiry__button__link"
                to={{
                  pathname: `/admin/dashboard/enquiries/detail/${id}`,
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

export default EnquiryDisplay;
