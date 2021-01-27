import React, { useEffect, useState } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";
import Container from "react-bootstrap/Container";
import SearchForm from "../hotels/SearchForm";
import Hotels from "../hotels/Hotels";
import Spinner from "react-bootstrap/Spinner";

function HotelSearch() {
  const [hotel, setHotel] = useState([]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = BASE_URL + "establishments";
    fetch(url, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setHotel(json);
        setFilteredHotel(json);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const filterHotel = function (e) {
    const serachValue = e.target.value.toLowerCase();
    //
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
    <Container>
      <SearchForm handleSearch={filterHotel} />
      {filteredHotel.map(({ id, name, image, description }) => (
        <Hotels key={id} name={name} image={image} description={description} />
      ))}
    </Container>
  );
}

export default HotelSearch;
