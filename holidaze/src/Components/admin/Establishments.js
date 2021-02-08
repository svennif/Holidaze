import React from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";

function Establishments() {
  const addEstablishment = (data) => {
    const establishmentUrl = BASE_URL + "establishment";
    FETCH_OPTIONS.method = "POST";
    FETCH_OPTIONS.body = JSON.stringify(data);

    fetch(establishmentUrl, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return <div></div>;
}

export default Establishments;
