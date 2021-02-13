import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, FETCH_OPTIONS, PATCH } from "../../../Api";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import EstablishmentPatchForm from "./EstablishmentPatchForm";

function EstablishmentsPatch() {
  const [hotel, setHotel] = useState({});
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    const url = BASE_URL + "establishments/" + id;
    fetch(url, FETCH_OPTIONS)
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

    FETCH_OPTIONS.method = PATCH;
    FETCH_OPTIONS.body = JSON.stringify(data);

    await fetch(BASE_URL + "establishments/" + id, FETCH_OPTIONS);

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
      </Container>
    );
  }
}

export default EstablishmentsPatch;
