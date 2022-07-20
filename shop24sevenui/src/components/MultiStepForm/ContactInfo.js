import React from "react";
import { Form } from "react-bootstrap";

const ContactInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Contact Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Email"
          onChange={handleChange("Email")}
          name="Email"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Phone Number"
          onChange={handleChange("PhoneNumber")}
          name="PhoneNumber"
        />
      </Form.Group>
    </div>
  );
};

export default ContactInfo;
