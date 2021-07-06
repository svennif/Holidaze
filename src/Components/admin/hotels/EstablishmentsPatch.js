import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers, PATCH } from "../../../Api";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EstablishmentPatchForm from "./EstablishmentPatchForm";
import AdminNavbar from "../AdminNavbar";

function EstablishmentsPatch({ history }) {
  const [hotel, setHotel] = useState({});
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  useEffect(() => {
    const options = { headers };
    const url = BASE_URL + "establishments/" + id;
    fetch(url, options)
      .then((r) => r.json())
      .then((j) => {
        console.log(j);
        setHotel(j);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Spinner className="spinner" animation="border" variant="primary" />;
  }

  async function onSubmit(data) {
    console.log("data", data);
    const options = { headers };

    options.method = PATCH;
    options.body = JSON.stringify(data);

    await fetch(BASE_URL + "establishments/" + id, options);

    window.location.assign("/admin/dashboard/establishments/update");
  }

  const {
    name,
    description,
    address,
    image,
    email,
    price,
    maxGuests,
    selfCatering,
  } = hotel;

  if (hotel) {
    return (
      <Container>
        <Row>
          <Col sm={2} className="ml-0">
            <AdminNavbar history={history} />
          </Col>
          <Col sm={10}>
            <h1>Edit Establishment</h1>
            <EstablishmentPatchForm
              onSubmit={onSubmit}
              name={name}
              email={email}
              id={id}
              image={image}
              price={price}
              maxGuests={maxGuests}
              description={description}
              address={address}
              selfCatering={selfCatering}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EstablishmentsPatch;
