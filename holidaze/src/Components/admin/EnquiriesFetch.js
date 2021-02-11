import React, { useState } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";
import AdminNavbar from "./AdminNavbar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <Container className="mt-3">
        <Row>
          <Col sm={2} className="ml-0">
            <AdminNavbar history={history} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EnquiriesFetch;
