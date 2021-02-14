import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../Api";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import HotelEnquiry from "./HotelEnquiry";

function Hotels({ match, hotel }) {
  let [hotels, setHotels] = useState({});

  useEffect(() => {
    const options = { headers };
    const hotelUrl = BASE_URL + "establishments";
    fetch(hotelUrl + `/${match.params.id}`, options)
      .then((r) => r.json())
      .then((j) => setHotels(j))
      .catch((err) => console.log(err));
  }, [match.params.id]);

  return (
    <>
      <Container>
        <h1 className="mt-3">{hotels.name}</h1>
        <hr />
        <Card className="detail-cards my-4">
          <Row className="d-flex justify-content-between">
            <Col sm={12} md={12} lg={6}>
              <Card.Img
                src={hotels.image}
                alt={hotels.name}
                className="detail-cards__img"
              />
            </Col>
            <Col sm={12} md={12} lg={6}>
              <Card.Body>
                <Card.Title>
                  <h2>Information</h2>
                  <hr />
                </Card.Title>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Description</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Extra info</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <p>{hotels.description}</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>
                            <strong>Email: </strong>
                            {hotels.email}
                          </p>
                          <hr />
                          <p>
                            <strong>Price: </strong>
                            {hotels.price}
                          </p>
                          <hr />
                          <p>
                            <strong>Max guests: </strong>
                            {hotels.maxGuests}
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <HotelEnquiry hotel={hotels.name} />
      </Container>
    </>
  );
}

export default Hotels;
