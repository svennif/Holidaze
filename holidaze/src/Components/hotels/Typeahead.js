import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Typeahead({ name, image, id, description }) {
  return (
    <Link
      className="typeahead__link"
      to={{
        pathname: `/hotels/${id}`,
        state: { name, image, id, description },
      }}
    >
      <Container className="typeahead__link__container">
        <Row>
          <Col sm={1} md={2}>
            <img className="typeahead__image" src={image} alt={name} />
          </Col>
          <Col className="typeahead__name__container" sm={11} md={10}>
            <h3 className="typeahead__name">{name}</h3>
          </Col>
        </Row>
      </Container>
    </Link>
  );
}

export default Typeahead;
