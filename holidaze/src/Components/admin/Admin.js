import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EnquiryModal from "../home/EnquiryModal";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const adminEmail = "admin@holidaze.com";
const adminPassword = "Holidaze123";

localStorage.setItem("adminEmail", adminEmail);
localStorage.setItem("adminPassword", adminPassword);

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      window.localStorage.getItem("adminEmail"),
      "This email is not in use"
    )
    .email("Invalid email address...")
    .required("Please enter an email."),
  password: yup
    .string()
    .matches(window.localStorage.getItem("adminPassword"), "Wrong password")
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

function Admin({ history }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log("Clicked");
    localStorage.setItem("isLoggedIn", true);

    if (localStorage.getItem("isLoggedIn") === "true") {
      console.log("Logged in!");
      history.push("/admin/dashboard");
    }
  };

  return (
    <>
      <Container className="col-xs-6">
        <Row>
          <Col sm className="admin__form">
            <h1>Login</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <p className="success" style={{ color: "Green" }}></p>
              <Form.Group>
                <Form.Label>Email: </Form.Label>
                <Form.Control
                  size="lg"
                  name="email"
                  placeholder="Email..."
                  ref={register({ required: true, minLength: 2 })}
                />
                <p>
                  <strong>
                    <i style={{ color: "Red" }}>{errors.email?.message}</i>
                  </strong>
                </p>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  size="lg"
                  type="password"
                  name="password"
                  placeholder="*******"
                  ref={register}
                />
                <p>
                  <strong>
                    <i style={{ color: "Red" }}>{errors.password?.message}</i>
                  </strong>
                </p>
              </Form.Group>

              <div className="text-right">
                <Button
                  className="admin__button "
                  variant="primary"
                  type="submit"
                >
                  Login <FaRegArrowAltCircleRight />
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <EnquiryModal />
    </>
  );
}

export default Admin;
