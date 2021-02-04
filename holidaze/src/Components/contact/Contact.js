import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";
import EnquiryModal from "../home/EnquiryModal";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your full name")
    .min(3, "Minimum characters for full name is 3 characters."),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please enter an email"),
  message: yup
    .string()
    .required("Please enter a message!")
    .min(10, "Please enter a message that is more than 10 characters"),
});

function Contact() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const url = BASE_URL + "contacts";
    FETCH_OPTIONS.method = "POST";
    FETCH_OPTIONS.body = JSON.stringify(data);

    fetch(url, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((data) => console.log(data));

    document
      .querySelector(".success")
      .append("Success! Your message has been sent!");
  };

  return (
    <>
      <Container className="col-xs-6">
        <Row>
          <Col sm className="contact__form">
            <h1 className="contact__main__title text-center">
              Send us a message
            </h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <p className="success" style={{ color: "Green" }}></p>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="name"
                  placeholder="Name..."
                  ref={register({ required: true, minLength: 2 })}
                />
                <p>
                  <strong>
                    <i>{errors.name?.message}</i>
                  </strong>
                </p>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Email..."
                  ref={register}
                />
                <p>
                  <strong>
                    <i>{errors.email?.message}</i>
                  </strong>
                </p>
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Enter your message..."
                  ref={register}
                />
                <p>
                  <strong>
                    <i>{errors.message?.message}</i>
                  </strong>
                </p>
              </Form.Group>

              <Button
                className="contact__button"
                variant="primary"
                type="submit"
              >
                Submit <FaPaperPlane className="ml-1" />
              </Button>
            </Form>
          </Col>
          <Col sm className="text-center contact__info">
            <h1 className="contact__main__title">Find us at</h1>
            <div>
              <h2 className="contact__under__title">
                <FaMapMarkerAlt className=".contact__icon" /> Address
              </h2>
              <p>Torgalmenningen 3b, 5014 Bergen</p>
            </div>
            <div>
              <h2 className="contact__under__title">
                <FaPhoneAlt className=".contact__icon" /> Phone
              </h2>
              <p>+47 123 45 678</p>
            </div>
            <div>
              <h2 className="contact__under__title">
                <FaEnvelope className=".contact__icon" /> Email
              </h2>
              <p>admin@holidaze.com</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <EnquiryModal />
      </Container>
    </>
  );
}

export default Contact;
