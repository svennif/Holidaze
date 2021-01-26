import React from "react";
import { Link } from "react-router-dom";

function Typeahead({ name, image, id }) {
  return (
    <Link to={`/hotels/${id}`}>
      <div className="typeahead">
        <span>{name}</span>
        <img src={image} alt={name} />
      </div>
    </Link>
  );
}

export default Typeahead;
