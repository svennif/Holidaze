import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchForm({ handleSearch }) {
  return (
    <InputGroup size="lg" className="search vw-50 my-2">
      <FormControl
        placeholder="Search for a game"
        onChange={(e) => handleSearch(e)}
      />
    </InputGroup>
  );
}

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchForm;
