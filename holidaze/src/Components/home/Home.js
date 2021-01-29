import React from "react";
import Container from "react-bootstrap/Container";
import HotelSearch from "../hotels/HotelSearch";
import EnquiryModal from "../home/EnquiryModal";

function Home() {
  return (
    <>
      <Container>
        <EnquiryModal />
        <HotelSearch />
      </Container>
    </>
  );
}

export default Home;
