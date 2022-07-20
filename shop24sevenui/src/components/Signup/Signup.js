import "./signup.css";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignin = async (e) => {
    var username = email.split("@")[0];
    localStorage.setItem("username", username);
    try {
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        UserName: username,
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword,
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
      await response.json();
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      window.location.reload();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <div className="signin-container">
        <div className="signin-inner">
          <div className="section-login">
            <h1 className="login-text">Login</h1>
            <label>Email</label>
            <br></br>
            <input
              type="email"
              name="username"
              className="login-box"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              className="login-box"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <br /> <button>Login</button>
            <br />
            <p>No account? Create your account down </p>
          </div>
          <div className="section-signup">
            <h1 className="login-text">Signup</h1>
            <label>Email</label>
            <br></br>
            <input
              type="email"
              name="username"
              className="login-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              className="login-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> <br />
            <label>Confirm password</label>
            <br></br>
            <input
              type="password"
              name="password"
              className="login-box"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br></br>
            <br /> <button onClick={handleSignin}>Signup</button>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
