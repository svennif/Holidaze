import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address...")
    .required("Please enter an email."),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const onSubmit = () => {
  document.querySelector(".success").append("You have now logged in!");
};

const adminEmail = "admin@holidaze.com";
const adminPassword = "Holidaze123";

localStorage.setItem("adminEmail", adminEmail);
localStorage.setItem("adminPassword", adminPassword);

function Admin() {
  function loginAdmin() {
    const registeredAdmin = localStorage.getItem("adminEmail");
    const registeredPassword = localStorage.getItem("adminPassword");
    const emailValue = document.getElementById("adminEmail");
    const passwordValue = document.getElementById("adminPassword");

    if (
      emailValue.value === registeredAdmin &&
      passwordValue.value === registeredPassword
    ) {
      return console.log("Hello world!");
    } else {
      return console.log(errors.adminEmail?.message);
    }
  }

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema),
  });

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
            placeholder="*******"
            ref={register}
          />
          <p>
            <strong>
              <i style={{ color: "Red" }}>{errors.adminPassword?.message}</i>
            </strong>
          </p>
        </Form.Group>
      </Form>
      <div className="text-right">
        <Button
          className="admin__button "
          variant="primary"
          type="submit"
          onClick={loginAdmin}
        >
          Login <FaRegArrowAltCircleRight />
        </Button>
      </div>
    </Container>
  );
}

export default Admin;
