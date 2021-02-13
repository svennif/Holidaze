import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address...")
    .required("Please enter an email."),
  password: yup
    .string()
    .required("No password provided.")
    .min(3, "Password is too short - should be 3 chars minimum."),
});

function Login() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const { registerAdmin, registerUser } = useContext(AuthContext);

  const history = useHistory();

  function onSubmit(data) {
    console.log("data", data);
    if (
      data.email === "admin@holidaze.com" &&
      data.password === "Holidaze123"
    ) {
      registerAdmin(data.email);
      history.push("/admin/dashboard");
    } else {
      console.log("logged in as" + data.email);
      registerUser(data.email);
      history.push("/");
    }
  }
  return (
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
  );
}

export default Login;
