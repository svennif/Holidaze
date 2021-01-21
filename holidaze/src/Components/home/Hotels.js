import React from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants";

function Hotels() {
  const establishmentsUrl = BASE_URL + "establishments";

  fetch(establishmentsUrl, FETCH_OPTIONS)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (json) {
      console.log(json);
    });

  return <div></div>;
}

export default Hotels;
