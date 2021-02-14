import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HotelSearch from "../hotels/HotelSearch";

function Home() {
  return (
    <>
      <Container fluid className="home">
        <Row>
          <HotelSearch className="home__searchBar d-flex" />
        </Row>
      </Container>
    </>
  );
}

export default Home;
