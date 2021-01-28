import React from "react";
import { Link } from "react-router-dom";

function Typeahead({ name, image, id }) {
  return (
    <Link className="typeahead__container" to={`/hotels/${id}`}>
      <div>
        <img className="typeahead__image" src={image} alt={name} />
        <span className="typeahead__name ml-3">{name}</span>
      </div>
    </Link>
  );
}

export default Typeahead;
