import React, { useState } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";

function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [enquiries, setEnquiries] = useState([]);

  const getMessages = () => {
    const messageUrl = BASE_URL + "contacts";
    fetch(messageUrl, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  getMessages();
  const getEnquiries = () => {
    const enquiryUrl = BASE_URL + "enquiries";

    fetch(enquiryUrl, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  getEnquiries();

  const addEstablishment = (data) => {
    const establishmentUrl = BASE_URL + "establishment";
    FETCH_OPTIONS.method = "POST";
    FETCH_OPTIONS.body = JSON.stringify(data);

    fetch(establishmentUrl, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return <p>Hello world!</p>;
}

export default AdminDashboard;

/**
 *
 * List of enquiries // GET
 *
 * List of messages from contact // GET
 *
 * Create new establishment // POST
 *
 * Update establishments // PATCH
 *
 */
