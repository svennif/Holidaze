import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../Api";
import Container from "react-bootstrap/Container";
import SearchForm from "./SearchForm";
import HotelCards from "./HotelCards";
import Spinner from "react-bootstrap/Spinner";

function AllHotels() {
  const [hotel, setHotel] = useState([]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = { headers };
    const url = BASE_URL + "establishments";
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setHotel(json);
        setFilteredHotel(json);
        console.log(json);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const filterHotel = function (e) {
    const serachValue = e.target.value.toLowerCase();

    const filterArray = hotel.filter(function (char) {
      const lowerCaseHotel = char.name.toLowerCase();
      if (lowerCaseHotel.includes(serachValue)) {
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
    <Container className="all-hotels">
      <h1 className="all-hotels__title mt-2">Hotels</h1>
      <hr />
      <SearchForm handleSearch={filterHotel} />
      {filteredHotel.map(
        ({ id, name, image, description, price, maxGuests }) => {
          return (
            <HotelCards
              key={id}
              id={id}
              name={name}
              image={image}
              description={description}
              price={price}
              maxGuests={maxGuests}
            />
          );
        }
      )}
    </Container>
  );
}

export default AllHotels;
