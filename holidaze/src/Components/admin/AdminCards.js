import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function AdminCards() {
  return (
    <>
      <div className="w-40 mx-auto">
        <Link to="/admin/dashboard/enquiries">
          <Card className="text-center mx-auto">
            <Card.Body>
              <Card.Title>Enquiries</Card.Title>
              <Button variant="primary">SELECT</Button>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/admin/dashboard/establishments/new">
          <Card className="text-center mx-auto">
            <Card.Body>
              <Card.Title>Create new establishment</Card.Title>
              <Button variant="primary">SELECT</Button>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/admin/dashboard/establishments/update">
          <Card className="text-center mx-auto">
            <Card.Body>
              <Card.Title>Update hotel info</Card.Title>
              <Button variant="primary">SELECT</Button>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/admin/dashboard/messages">
          <Card className="text-center mx-auto">
            <Card.Body>
              <Card.Title>Messages</Card.Title>
              <Button variant="primary">SELECT</Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  );
}

export default AdminCards;
