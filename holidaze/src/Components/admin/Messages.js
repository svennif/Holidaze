import React, { useState } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";
import AdminNavbar from "./AdminNavbar";

function Messages({ history }) {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    const messageUrl = BASE_URL + "contacts";
    fetch(messageUrl, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  getMessages();
  return <AdminNavbar history={history} />;
}

export default Messages;
