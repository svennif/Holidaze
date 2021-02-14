import React, { useState, useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../../Api";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import DeleteEstablishments from "../DeleteEstablishments";

function EnquiriesDetails({ match }) {
  let [enquiries, setEnquiries] = useState({});

  let historyPath = "/admin/dashboard/enquiries";
  let deletePath = "enquiries/";

  useEffect(() => {
    const hotelUrl = BASE_URL + "enquiries";
    fetch(hotelUrl + `/${match.params.id}`, FETCH_OPTIONS)
      .then((r) => r.json())
      .then((j) => setEnquiries(j))
      .catch((err) => console.log(err));
  }, [match.params.id]);

  return (
    <>
      <Container>
        <h1>{enquiries.name}</h1>
        <Form>
          <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control disabled defaultValue={enquiries.name} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control disabled defaultValue={enquiries.email} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Check in: </Form.Label>
            <Form.Control disabled defaultValue={enquiries.checkIn} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Check out: </Form.Label>
            <Form.Control disabled defaultValue={enquiries.checkOut} />
          </Form.Group>
          <Form.Group>
            <Form.Label>establishment Id: </Form.Label>
            <Form.Control disabled defaultValue={enquiries.establishmentId} />
          </Form.Group>
          <DeleteEstablishments
            id={enquiries.id}
            deletePath={deletePath}
            historyPath={historyPath}
          />
        </Form>
      </Container>
    </>
  );
}

export default EnquiriesDetails;
