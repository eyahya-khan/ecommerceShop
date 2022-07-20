import React from "react";
import { Form } from "react-bootstrap";

const PersonalInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Personal Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="First Name"
          onChange={handleChange("FirstName")}
          name="FirstName"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Last Name"
          onChange={handleChange("LastName")}
          name="LastName"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Gender"
          as="select"
          onChange={handleChange("Gender")}
          name="Gender"
        >
          <option>Male</option>
          <option>Female</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default PersonalInfo;
