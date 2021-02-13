import React, { useState } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../../Api";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaPaperPlane } from "react-icons/fa";
import AdminNavbar from "../AdminNavbar";

const schema = yup.object().shape({
  name: yup.string().required("Please enter a name for the hotel."),
  email: yup.string(),
  image: yup.string(),
  price: yup
    .number("Please enter a number for the price.")
    .min(500, "Minimum price is 500"),
  maxGuests: yup.number("Please enter a number of max guests."),
  description: yup.string(),
  address: yup.string(),
  selfCatering: yup.bool(),
});

function Establishments({ history }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    const establishmentUrl = BASE_URL + "establishments";

    FETCH_OPTIONS.method = "POST";
    FETCH_OPTIONS.body = JSON.stringify(data);

    fetch(establishmentUrl, FETCH_OPTIONS)
      .then((r) => r.json())
      .then((j) => console.log(j))
      .catch((err) => console.log(err));

    document
      .querySelector(".success")
      .append("Success! Your message has been sent!");
  };

  const [radioValue, setRadioValue] = useState(false);

  const handleChange = (val) => {
    setRadioValue(val);
    console.log(radioValue);
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col sm={2} className="ml-0">
            <AdminNavbar history={history} />
          </Col>
          <Col sm={10}>
            <h1>Add a new hotel: </h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <p
                className="success"
                style={{ color: "Green" }}
              ></p>
              <FormGroup>
                <FormLabel>Hotel name: </FormLabel>
                <FormControl
                  name="name"
                  ref={register}
                  placeholder="E.g. Sleep Well Hotel"
                />
                <p>
                  <strong>
                    <i>{errors.name?.message}</i>
                  </strong>
                </p>
              </FormGroup>
              <FormGroup>
                <FormLabel>Hotel email: </FormLabel>
                <FormControl
                  name="email"
                  ref={register}
                  placeholder="example@email.com"
                />
                <p>
                  <strong>
                    <i>{errors.email?.message}</i>
                  </strong>
                </p>
              </FormGroup>
              <FormGroup>
                <FormLabel>Image: </FormLabel>
                <FormControl
                  name="image"
                  ref={register}
                  placeholder="Link to image..."
                />
                <p>
                  <strong>
                    <i>{errors.image?.message}</i>
                  </strong>
                </p>
              </FormGroup>
              <FormGroup>
                <FormLabel>Price: </FormLabel>
                <FormControl
                  type="number"
                  min="500"
                  name="price"
                  ref={register}
                />
                <p>
                  <strong>
                    <i>{errors.price?.message}</i>
                  </strong>
                </p>
              </FormGroup>
              <FormGroup>
                <FormLabel>Max guests: </FormLabel>
                <FormControl type="number" name="maxGuests" ref={register} />
                <p>
                  <strong>
                    <i>{errors.maxGuests?.message}</i>
                  </strong>
                </p>
              </FormGroup>
              <FormGroup>
                <FormLabel>Description: </FormLabel>
                <FormControl as="textarea" name="description" ref={register} />
                <p>
                  <strong>
                    <i>{errors.description?.message}</i>
                  </strong>
                </p>
              </FormGroup>
              <FormGroup>
                <FormLabel>Address: </FormLabel>
                <FormControl name="address" ref={register} />
                <p>
                  <strong>
                    <i>{errors.address?.message}</i>
                  </strong>
                </p>
              </FormGroup>
              <FormGroup>
                <FormLabel>Self catering? </FormLabel>
                <br />
                <ToggleButtonGroup
                  type="radio"
                  value={radioValue}
                  name="selfCatering"
                  onChange={handleChange}
                >
                  <ToggleButton value={false}>Yes</ToggleButton>
                  <ToggleButton value={true}>No</ToggleButton>
                </ToggleButtonGroup>
                <p>
                  <strong>
                    <i>{errors.selfCatering?.message}</i>
                  </strong>
                </p>
              </FormGroup>
              <Button type="submit" variant="primary" className="p-2">
                Submit <FaPaperPlane className="ml-1" />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Establishments;
