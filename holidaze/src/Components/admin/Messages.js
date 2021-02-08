import React, { useState } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";

function Messages() {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    const messageUrl = BASE_URL + "contacts";
    fetch(messageUrl, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return <div></div>;
}

export default Messages;
