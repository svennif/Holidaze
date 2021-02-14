import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SearchForm = ({ handleSearch, showTypeahead }) => {
  return (
    <InputGroup size="lg" className="search typeahead w-75 my-3 mx-auto">
      <FormControl
        placeholder="Search for a hotel..."
        onChange={(e) => handleSearch(e)}
        onClick={showTypeahead}
      />
    </InputGroup>
  );
};

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchForm;
