import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import PropTypes from "prop-types";
import FormControl from "react-bootstrap/FormControl";

function HotelSearch({ handleHotelSearch }) {
  return (
    <InputGroup className="search my-2">
      <FormControl
        size="lg"
        placeholder="Search for a hotel"
        onChange={(e) => handleHotelSearch(e)}
      />
    </InputGroup>
  );
}

HotelSearch.propTypes = {
  handleHotelSearch: PropTypes.func.isRequired,
};

export default HotelSearch;
