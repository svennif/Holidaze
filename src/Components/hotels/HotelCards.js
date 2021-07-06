import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function HotelCards({ name, image, description, price, id, maxGuests }) {
  return (
    <Link
      className="search-card"
      to={{
        pathname: `/hotels/${id}`,
        state: { name, image, id, description, maxGuests },
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
              </Card.Title>
              <p>{description}</p>
              <h5 className="search-card__text">
                <strong>Price: </strong>
                {price}
              </h5>
              <hr />
              <h5 className="search-card__text">
                <strong>Max guests: </strong>
                {maxGuests}
              </h5>
              <hr />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Link>
  );
}

export default HotelCards;
