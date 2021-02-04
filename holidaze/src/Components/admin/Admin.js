import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const adminEmail = "admin@holidaze.com";
const adminPassword = "Holidaze123";

localStorage.setItem("adminEmail", adminEmail);
localStorage.setItem("adminPassword", adminPassword);

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address...")
    .required("Please enter an email.")
    .matches(
      window.localStorage.getItem("adminEmail"),
      "This email is not in use"
    ),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(window.localStorage.getItem("adminPassword"), "Wrong password."),
});

function Admin() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log("Clicked");
    localStorage.setItem("isLoggedIn", true);

    if (localStorage.getItem("isLoggedIn") === true) {
      console.log("Logged in!");
    } else {
      console.log("Login failed!");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <p className="success" style={{ color: "Blue" }}></p>
        <Form.Group>
          <Form.Label>Email: </Form.Label>
          <Form.Control
            id="adminEmail"
            size="lg"
            name="email"
            placeholder="Email..."
            type="text"
            ref={register({ required: true, minLength: 2 })}
          />
          <p>
            <strong>
              <i style={{ color: "Red" }}>{errors.adminEmail?.message}</i>
            </strong>
          </p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password: </Form.Label>
          <Form.Control
            id="adminPassword"
            size="lg"
            type="password"
            name="password"
            placeholder="*********"
            ref={register}
          />
          <p>
            <strong>
              <i style={{ color: "Red" }}>{errors.adminPassword?.message}</i>
            </strong>
          </p>
        </Form.Group>
        <div className="text-right">
          <Button className="contact__button" variant="primary" type="submit">
            Submit <FaRegArrowAltCircleRight className="ml-1" />
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Admin;
