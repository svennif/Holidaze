import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../../Api";
import AdminHotelCards from "./AdminHotelCards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdminNavbar from "../AdminNavbar";
import Spinner from "react-bootstrap/Spinner";

function AdminHotels({ history }) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = BASE_URL + "establishments";
  const linkPath = "/admin/hotels/edit/";

  useEffect(() => {
    fetch(url, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setHotels(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner className="spinner" animation="border" variant="primary" />;
  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={2}>
          <AdminNavbar history={history} />
        </Col>
        <Col sm={12} md={12} lg={10}>
          <h1> Select a hotel to update Hotels</h1>
          {hotels &&
            hotels.map((hotel) => {
              const { id, name, image, price, maxGuests } = hotel;
              return (
                <AdminHotelCards
                  key={id}
                  maxGuests={maxGuests}
                  name={name}
                  image={image}
                  price={price}
                  id={id}
                  linkPath={linkPath}
                />
              );
            })}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminHotels;