import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";

function Hotels() {
  let [hotels, setHotels] = useState({});

  useEffect(() => {
    const hotelUrl = BASE_URL + "establishments";
    fetch(hotelUrl, FETCH_OPTIONS)
      .then((r) => r.json())
      .then((j) => setHotels(j))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container>
        <Card>
          <Card.Header>{hotels.name}</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Hotels;
