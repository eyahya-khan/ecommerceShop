import React from "react";
import { Form } from "react-bootstrap";

const LocationInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Location Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Address"
          onChange={handleChange("Address")}
          name="Address"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Postal code"
          onChange={handleChange("PostalCode")}
          name="PostalCode"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="City"
          onChange={handleChange("City")}
          name="City"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Country"
          onChange={handleChange("Country")}
          name="Country"
        />
      </Form.Group>
    </div>
  );
};

export default LocationInfo;
