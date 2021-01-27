import React from "react";
//import { Link } from "react-router-dom";

function Typeahead({ name, image, id }) {
  return (
    <div className="typeahead">
      <span>{name}</span>
      <img src={image} alt={name} />
    </div>
  );
}

export default Typeahead;
