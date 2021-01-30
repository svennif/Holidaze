import React, { useEffect, useState, useRef } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";
import Container from "react-bootstrap/Container";
import SearchForm from "../hotels/SearchForm";
import Spinner from "react-bootstrap/Spinner";
import Typeahead from "./Typeahead";

function HotelSearch() {
  const [hotel, setHotel] = useState([]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [showDisplay, setShowDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const url = BASE_URL + "establishments";
    fetch(url, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        setHotel(json);
        setFilteredHotel(json);
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

  const filterSuggestion = function (e) {
    const serachValue = e.target.value.toLowerCase();

    const suggestionArray = hotel.filter( function (char) {
      const lowerCaseHotel = char.name.toLowerCase();
      if (lowerCaseHotel.includes(serachValue)) {
        return setDisplay(true);
      }
      return setDisplay(false);
    });
    setShowDisplay(suggestionArray);
  };

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  });

  useEffect(() => {});

  const clickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
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
    <Container ref={wrapperRef}>
      <SearchForm
        handleSearch={filterHotel}
        showTypeahead={filterSuggestion}
      />
      {filteredHotel.map(
        ({ id, name, image, description }) =>
          display && (
            <Typeahead
              id={id}
              key={id}
              name={name}
              image={image}
              description={description}
            />
          )
      )}
    </Container>
  );
}

export default HotelSearch;
