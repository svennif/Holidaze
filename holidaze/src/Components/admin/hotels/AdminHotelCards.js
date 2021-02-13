import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaBed, FaMoneyBillAlt, FaFileAlt } from "react-icons/fa";

function HotelCards({ id, name, email, image, price, description, maxGuests }) {
  return (
    <Link
      className="search-card"
      to={{
        pathname: `/admin/dashboard/establishments/patch/edit/${id}`,
        state: { id, name, email, image, price, description, maxGuests },
      }}
    >
      <Card className="search-card__card mb-3">
        <Row className="d-flex">
          <Col>
            <Card.Img src={image} alt={name} className="search-card__image" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className="search-card__title">
                <h1>{name}</h1>
                <hr />
              </Card.Title>
              <h5 className="search-card__text">
                <FaMoneyBillAlt className="mr-2" />
                <strong>Price: </strong>€{price}
              </h5>
              <hr />
              <h5 className="search-card__text">
                <FaBed className="mr-2" />
                <strong>Max guests: </strong>
                {maxGuests}
              </h5>
              <hr />
              <h5 className="search-card__text">
                <FaFileAlt className="mr-2" />
                <strong>Description: </strong>
              </h5>
              {description}
              <hr />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Link>
  );
}

export default HotelCards;
