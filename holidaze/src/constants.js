const KEY = "5ffdcdddbfee1036185d102f";
const BASE_URL =
  "https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/";
const FETCH_OPTIONS = {
  headers: {
    "Content-Type": "application/json",
    key: KEY,
  },
};

const establishmentsUrl = BASE_URL + "establishments";

fetch(establishmentsUrl, FETCH_OPTIONS)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  });