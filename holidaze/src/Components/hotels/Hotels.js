import React from "react";
import Container from "react-bootstrap/Container";

function Hotels({ location }) {
  console.log(location);
  const { name, image, description } = location.state;
  return (
    <>
      <Container>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <p>{description}</p>
      </Container>
    </>
  );
}

export default Hotels;
