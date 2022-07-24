import './multiForm.css'
import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import LocationInfo from "./LocationInfo";
import ReviewInfo from "./ReviewInfo";
import SuccessInfo from "./SuccessInfo";
import { Link } from "react-router-dom";
import { Button } from '../product.styled';

const MultiForm = () => {
  const [values, setValues] = useState({
    FirstName: "",
    LastName: "",
    Gender: "",
    Email: "",
    PhoneNumber: "",
    Address: "",
    PostalCode: "",
    City: "",
    Country: "",
    PaymentMethod: "CASH",
  });
  const [step, setStep] = useState(1);

  const handleOrder = async (e) => {
    var username = localStorage.getItem("username");
    try {
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        UserName: username,
        FirstName: values.FirstName,
        LastName: values.LastName,
        Email: values.Email,
        PhoneNumber: values.PhoneNumber,
        Address: values.Address,
        PostalCode: values.PostalCode,
        City: values.City,
        Country: values.Country,
        PaymentMethod: "CASH",
      });
      const requestOptions = {
        method: "POST",
        mode: "cors",
        headers: myHeaders,
        body: body,
        redirect: "follow",
      };

      const response = await fetch(
        "https://localhost:7152/order",
        requestOptions
      );
      await response.json();
      nextStep();
    } catch (e) {
      alert(e.message);
    }
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div className="vh-100">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="form-container card p-3 w-50 mt-5">
          <div className='form-inner-container'>
          {
            {
              1: <PersonalInfo handleChange={handleChange} />,
              2: <ContactInfo handleChange={handleChange} />,
              3: <LocationInfo handleChange={handleChange} />,
              4: <ReviewInfo info={values} />,
              5: <SuccessInfo />,
            }[step]
          }
            </div>
          <div className="d-flex justify-content-around px-5 mt-5">
            {step > 1 && step < 5 ? (
              <Button onClick={prevStep}>
                Back
              </Button>
            ) : null}

            {step >= 1 && step < 4 ? (
              <Button onClick={nextStep}>
                Next
              </Button>
            ) : step === 4 ? (
              <Button onClick={handleOrder}>
                Submit
              </Button>
            ) : (
              <Button>
                <Link to="/">Home</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiForm;
