import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../Api";
import AdminHotelCards from "./AdminHotelCards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdminNavbar from "../AdminNavbar";
import Spinner from "react-bootstrap/Spinner";

function AdminHotels({ history }) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = { headers };
    const url = BASE_URL + "establishments";

    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setHotels(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container>
        <Spinner className="spinner" animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={2}>
          <AdminNavbar history={history} />
        </Col>
        <Col sm={12} md={12} lg={10}>
          <h1> Select a hotel to update</h1>
          <hr />
          {hotels &&
            hotels.map((hotel) => {
              const { id, name, image, price, maxGuests, description } = hotel;
              return (
                <AdminHotelCards
                  key={id}
                  description={description}
                  maxGuests={maxGuests}
                  name={name}
                  image={image}
                  price={price}
                  id={id}
                />
              );
            })}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminHotels;
