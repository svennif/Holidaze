import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaCommentDots } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/esm/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaPaperPlane } from "react-icons/fa";

const schema = yup.object().shape({});

function EnquiryModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // name, email, establishmentID, checkIN, checkOut
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Container>
        <Button className="enquiryModal" variant="primary" onClick={handleShow}>
          Enquiries <FaCommentDots />
        </Button>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormControl
                type="text"
                name="name"
                placeholder="Name... "
              ></FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                name="email"
                placeholder="Email... "
              ></FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Id</FormLabel>
              <FormControl type="text" placeholder="Id... "></FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Check in date</FormLabel>
              <br />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Check in date</FormLabel>
              <br />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send <FaPaperPlane />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EnquiryModal;
