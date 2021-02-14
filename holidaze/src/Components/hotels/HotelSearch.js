import React, { useEffect, useState, useRef } from "react";
import { BASE_URL, headers } from "../../Api";
import SearchForm from "../hotels/SearchForm";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Typeahead from "./Typeahead";
import { Link } from "react-router-dom";

function HotelSearch() {
  const [hotel, setHotel] = useState([]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [showDisplay, setShowDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(false);
  const wrapperRef = useRef(null);

  
  useEffect(() => {
    const options = { headers };
    const url = BASE_URL + "establishments";
    fetch(url, options)
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

    const suggestionArray = hotel.filter(function (char) {
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
    <Container className="typeahead" ref={wrapperRef}>
      <Row className="d-flex justify-content-center">
        <Col xs={12} lg={10} className="home__content">
          <h1 className="home__title">Holidaze</h1>
          <p className="home__banner">
            <i>Your home away from home</i>
          </p>
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
        </Col>
      </Row>
      <Link to="/allhotels" className="home__link">
        <div className="text-center home__link__container">
          <Button className="home__link__button">Check out our hotels</Button>
        </div>
      </Link>
    </Container>
  );
}

export default HotelSearch;
