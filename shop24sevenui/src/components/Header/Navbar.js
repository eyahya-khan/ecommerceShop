import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [humMenu, setHumMenu] = useState(false);
  const username = localStorage.getItem("username");

  const removeHumMenu = () => {
    setHumMenu(false);
  };
  const getHumMenu = () => {
    setHumMenu(true);
  };

  const refresh = () => {
    window.location.reload();
  };

  const handleClickSignout = () => {
    localStorage.removeItem("username");
    refresh();
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
              <Link to="/" onClick={removeHumMenu}>Home</Link>
              <Link to="/product" onClick={removeHumMenu}>Product</Link>
              <Link to="/cart" onClick={removeHumMenu}>Cart</Link>
              <Link to="/signup" onClick={removeHumMenu}>Signup</Link>
            </div>
          </div>
        )}
        <span className="hum-logo" onClick={getHumMenu}>&#9776;</span>

        <div className="signin-cart-btn">
          {username ? (
            <>
              <p>Hello, {username} </p>
              <div onClick={handleClickSignout} className="login-icon">
                Logout
              </div>
            </>
          ) : (
            <div className="login-icon"> 
              <Link to="/signup">
              Login
              </Link>
            </div>
          )}
          <div className="cart-icon">
            {/* <img src="./cart.png" alt="cart" /> */}
            <Link to="/cart">
            Cart
            </Link>
            {/* <p>{countContext.countItem}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
