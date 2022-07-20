import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import LocationInfo from "./LocationInfo";
import ReviewInfo from "./ReviewInfo";
import SuccessInfo from "./SuccessInfo";
import { Link } from "react-router-dom";

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
  });

  const [step, setStep] = useState(1);

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
    <div className="bg-dark vh-100">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card p-3 w-50 mt-5">
          {
            {
              1: <PersonalInfo handleChange={handleChange} />,
              2: <ContactInfo handleChange={handleChange} />,
              3: <LocationInfo handleChange={handleChange} />,
              4: <ReviewInfo info={values} />,
              5: <SuccessInfo />,
            }[step]
          }
          <div className="d-flex justify-content-around px-5 mt-5">
            {step > 1 && step < 5 ? (
              <button className="btn btn-warning" onClick={prevStep}>
                Back
              </button>
            ) : null}
            <button className="btn btn-warning" onClick={nextStep}>
              {step >= 1 && step < 4 ? "Next" : step === 4 ? "Submit" : <Link to="/">Home</Link>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiForm;
