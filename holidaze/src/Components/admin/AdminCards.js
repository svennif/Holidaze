import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Bryggen from "../images/bergen_bryggen2.jpg";
import Festplassen from "../images/bergen_festplassen2.jpg";
import Gondol from "../images/bergen_gondol2.jpg";
import Lufthavn from "../images/bergen_lufthavn2.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AdminCards() {
  return (
    <>
      <Row>
        <Col md={6}>
          <Link to="/admin/dashboard/enquiries">
            <Card className="text-center mx-auto w-75 mb-3">
              <Card.Img
                variant="top"
                src={Bryggen}
                alt="Enquiries"
                className="admin__card__img"
              />
              <Card.Body>
                <Card.Title>Enquiries</Card.Title>
                <Button variant="primary">SELECT</Button>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/admin/dashboard/establishments/new">
            <Card className="text-center mx-auto w-75">
              <Card.Img
                src={Festplassen}
                alt="New hotel"
                className="admin__card__img"
              />
              <Card.Body>
                <Card.Title>Create new hotel</Card.Title>
                <Button variant="primary">SELECT</Button>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={6}>
          <Link to="/admin/dashboard/establishments/update">
            <Card className="text-center mx-auto w-75 mb-3">
              <Card.Img
                src={Gondol}
                alt="Update hotel"
                className="admin__card__img"
              />
              <Card.Body>
                <Card.Title>Update hotel</Card.Title>
                <Button variant="primary">SELECT</Button>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/admin/dashboard/messages">
            <Card className="text-center mx-auto w-75">
              <Card.Img
                src={Lufthavn}
                alt="Messages"
                className="admin__card__img"
              />
              <Card.Body>
                <Card.Title>Messages</Card.Title>
                <Button variant="primary">SELECT</Button>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default AdminCards;
