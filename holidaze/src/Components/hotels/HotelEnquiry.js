import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL, FETCH_OPTIONS } from "../../Api";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your full name"),
  email: yup.string().email("Invalid email address").required(),
  establishmentId: yup.string().required(),
  checkIn: yup.date().required(),
  checkOut: yup.date().required(),
});

function EnquiryModal({ hotel }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const modalUrl = BASE_URL + "enquiries";

    FETCH_OPTIONS.method = "POST";
    FETCH_OPTIONS.body = JSON.stringify(data);

    fetch(modalUrl, FETCH_OPTIONS)
      .then((r) => r.json())
      .then((j) => console.log(j));

    console.log("Success!");
  };

  return (
    <>
      <h2 className="hotelEnquiry">Send us an enquiry</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormLabel>Name: </FormLabel>
          <FormControl
            type="text"
            name="name"
            ref={register}
            placeholder="E.g. Leif Bjarte Hansen..."
          />
          <p>
            <strong>
              <i>{errors.name?.message}</i>
            </strong>
          </p>
        </FormGroup>
        <FormGroup>
          <FormLabel>Email: </FormLabel>
          <FormControl
            type="email"
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
          <FormLabel>Establishment Id: </FormLabel>
          <FormControl
            type="establishmentId"
            name="establishmentId"
            ref={register}
            defaultValue={hotel}
            readOnly
          />
          <p>
            <strong>
              <i>{errors.establishmentId?.message}</i>
            </strong>
          </p>
        </FormGroup>
        <FormGroup>
          <FormLabel>Check In: </FormLabel>
          <FormControl type="date" name="checkIn" ref={register} />
          <p>
            <strong>
              <i>{errors.checkIn?.message}</i>
            </strong>
          </p>
        </FormGroup>
        <FormGroup>
          <FormLabel>Check Out: </FormLabel>
          <FormControl type="date" name="checkOut" ref={register} />
          <p>
            <strong>
              <i>{errors.checkOut?.message}</i>
            </strong>
          </p>
        </FormGroup>
        <Button variant="primary" type="submit" className="mb-5">
          Send <FaPaperPlane />
        </Button>
      </Form>
    </>
  );
}

export default EnquiryModal;
