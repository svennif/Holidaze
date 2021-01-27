import React, { useState } from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Typeahead from "./Typeahead";

const SearchForm = ({ handleSearch }) => {
  const [display, setDisplay] = useState(false);
  const showTypeahead = () => setDisplay(true);
  return (
    <InputGroup size="lg" className="search vw-50 my-3">
      <FormControl
        placeholder="Search for a hotel..."
        onChange={(e) => handleSearch(e)}
        onClick={showTypeahead}
      />
      {display ? <Typeahead /> : null}
    </InputGroup>
  );
};

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchForm;
