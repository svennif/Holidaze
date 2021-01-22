import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import HotelSearch from "../hotels/HotelSearch";
import Hotels from "../hotels/Hotels";

function Home() {
  const [hotel, setHotel] = useState([]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hotelUrl = BASE_URL + "establishments";

    fetch(hotelUrl, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((json) => {
        setHotel(json);
        setFilteredHotel(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterHotels = function (e) {
    const searchValue = e.target.value.toLowerCase();

    const filterArray = hotel.filter(function (char) {
      const lowerCaseName = char.name.toLowerCase();
      if (lowerCaseName.includes(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredHotel(filterArray);
  };

  if (loading) {
    return (
      <Container id="SpinnerContainer">
        <Spinner animation="border" id="spinner">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }
  return (
    <>
      <Container>
        <HotelSearch handleHotelSearch={filterHotels} />
        {filteredHotel.map(({ image, id, name, description }) => (
          <Hotels
            key={id}
            id={id}
            name={name}
            image={image}
            description={description}
          />
        ))}
      </Container>
    </>
  );
}

export default Home;
