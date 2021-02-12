import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";
import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

function HotelDetails() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const detailsUrl = BASE_URL + "establishments";
    fetch(detailsUrl, FETCH_OPTIONS)
      .then((r) => r.json())
      .then((j) => setHotels(j))
      .catch((err) => console.log(err));
  }, []);

  return <Container></Container>;
}

export default HotelDetails;
