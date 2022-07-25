import './SignupForm.css'
import React from 'react';
import useForm from './useForm';
import { Button } from '../product.styled';

function SignupForm() {
const formLogin = () => {
    // console.log("Callback function when form is submitted!");
    console.log(values);
  }

  //Custom hook
  const {handleChange, values, errors, handleSubmit} = useForm(formLogin);

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
      <input type="text" minLength='5' required name="username" placeholder="Username"  onChange={handleChange}   />
      {
        errors.username && <h3>{errors.username}</h3>

      }
      <input type="email" name="email" placeholder="Email"  onChange={handleChange}   />
      {
        errors.email && <h3>{errors.email}</h3>
      }
      <input minLength='8' type="password" name="password" placeholder="Password"  onChange={handleChange}   />
      {
        errors.password && <h3>{errors.password}</h3>
      }
      <Button>Login</Button>
      </form>

    </div>
  );
}

export default SignupForm