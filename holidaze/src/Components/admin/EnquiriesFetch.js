import React, { useState } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";
import AdminNavbar from "./AdminNavbar";

function EnquiriesFetch({ history }) {
  const [enquiries, setEnquiries] = useState([]);

  const getEnquiries = () => {
    const enquiryUrl = BASE_URL + "enquiries";

    fetch(enquiryUrl, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  getEnquiries();

  return (
    <div>
      <AdminNavbar history={history} />
    </div>
  );
}

export default EnquiriesFetch;
