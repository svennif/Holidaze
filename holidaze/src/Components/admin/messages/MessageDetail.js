import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../../Api";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import DeleteEstablishments from "../DeleteEstablishments";

function MessageDetails({ match }) {
  let [messages, setMessages] = useState({});

  let historyPath = "/admin/dashboard/messages";
  let deletePath = "contacts/";

  useEffect(() => {
    const hotelUrl = BASE_URL + "contacts";
    fetch(hotelUrl + `/${match.params.id}`, FETCH_OPTIONS)
      .then((r) => r.json())
      .then((j) => setMessages(j))
      .catch((err) => console.log(err));
  }, [match.params.id]);

  return (
    <>
      <Container>
        <h1>{messages.name}</h1>
        <Form>
          <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control disabled defaultValue={messages.name} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control disabled defaultValue={messages.email} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message: </Form.Label>
            <Form.Control disabled defaultValue={messages.message} />
          </Form.Group>
          <DeleteEstablishments
            id={messages.id}
            deletePath={deletePath}
            historyPath={historyPath}
          />
        </Form>
      </Container>
    </>
  );
}

export default MessageDetails;
