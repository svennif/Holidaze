import React from "react";
import { Link } from "react-router-dom";

function Typeahead({ name, image, id }) {
  return (
    <Link to={`/hotels/${id}`}>
      <div className="typeahead">
        <img src={image} alt={name} />
        <span>{name}</span>
      </div>
    </Link>
  );
}

export default Typeahead;
