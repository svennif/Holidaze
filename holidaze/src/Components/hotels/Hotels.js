import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";

function Hotels({ match }) {
  let [hotels, setHotels] = useState({});

  useEffect(() => {
    const hotelUrl = BASE_URL + "establishments";
    fetch(hotelUrl + `/${match.params.id}`, FETCH_OPTIONS)
      .then((r) => r.json())
      .then((j) => setHotels(j))
      .catch((err) => console.log(err));
  }, [match.params.id]);

  return (
    <>
      <p>{hotels.description}</p>
    </>
  );
}

export default Hotels;
