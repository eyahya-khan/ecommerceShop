import { useState } from "react";
import { omit } from "lodash";
import { useNavigate } from "react-router-dom";

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = (e, name, value) => {
    switch (name) {
      case "username":
        if (value.length <= 4) {
          setErrors({
            ...errors,
            username: "Username atleast have 5 letters",
          });
        } else {
          // set the error state empty or remove the error for username input
          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "username");
          setErrors(newObj);
        }
        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;

    validate(e, name, val);
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = async (e) => {
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      localStorage.setItem("username", values.username);
      try {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
          UserName: values.username,
          Email: values.email,
          Password: values.password,
          ConfirmPassword: values.password,
        });
        const requestOptions = {
          method: "POST",
          mode: "cors",
          headers: myHeaders,
          body: body,
          redirect: "follow",
        };

        const response = await fetch(
          "https://localhost:7152/signup",
          requestOptions
        );
        var result = await response.json();
        if(result === 1)
        {
          navigate('/');
        }else{
          alert('username is not correct')
        }
      } catch (e) {
        alert(e.message);
      }

      callback();
    } else {
      alert("There is an Error!");
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
