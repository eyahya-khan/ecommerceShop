import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../App";

const Navbar = () => {
  const { counter, popup } = useContext(GlobalContext);

  const [humMenu, setHumMenu] = useState(false);
  const [displayCounter] = useState(true);
  
  const username = localStorage.getItem("username");
  
  const removeHumMenu = () => {
    setHumMenu(false);
  };
  const getHumMenu = () => {
    setHumMenu(true);
  };

  const handleClickSignout = () => {
    localStorage.removeItem("username");
    Navigate("/home");
  };

  return (
    <>
      <div className="title-logo">
        <Link to="/">
          <h1>Shop</h1>
          <h1 className="logo-color">24</h1>
          <h1>Seven</h1>
        </Link>
      </div>
      <div className="navbar">
        {humMenu && (
          <div className="overlay">
            <Link to="#" className="closebtn" onClick={removeHumMenu}>
              &times;
            </Link>
            <div className="overlay-content">
              <Link to="/" onClick={removeHumMenu}>
                Home
              </Link>
              <Link to="/cart" onClick={removeHumMenu}>
                Cart
              </Link>
              <Link to="/admin" onClick={removeHumMenu}>
                Admin
              </Link>
              <Link to="/signup" onClick={removeHumMenu}>
                Signup
              </Link>
            </div>
          </div>
        )}
        <span className="hum-logo" onClick={getHumMenu}>
          &#9776;
        </span>

        <div className="signin-cart-btn">
          {username ? (
            <>
              <p>Hello, {username} </p>
              <div onClick={handleClickSignout} className="login-icon">
                Logout
              </div>
            </>
          ) : (
            <>
            {popup && (
              <div class="popup">
                <span class="popuptext" id="myPopup">
                  Login First!
                </span>
              </div>
              )}
              <div className="login-icon">
                <Link to="/signup">Login</Link>
              </div>
            </>
          )}
          <div className="cart-icon">
            <Link to="/cart">
              <img src="./images/cart.png" alt="cart" />
              {counter !== 0 && displayCounter ? <p>{counter}</p> : null}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
