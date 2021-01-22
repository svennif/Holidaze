import React from "react";
//import { BASE_URL, FETCH_OPTIONS } from "../../Api";
//import HotelSearch from "./HotelSearch";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Hotels({ image, id, name, description }) {
  return (
    <Card bg="primary" text="white" className="my-3">
      <Card.Img src={image} alt={name} />
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/hotels/${id}`}>
          <Button variant="secondary" block>
            View hotel
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Hotels;
