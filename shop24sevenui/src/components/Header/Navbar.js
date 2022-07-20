import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Navbar.css";

const Navbar = ({
  handleLoginClick,
  setIsShowLogin,
  setIsCartVisible,
  setUsers,
}) => {
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

  const handleClick = () => {
    handleLoginClick();
  };

  const handleClickSignout = () => {
    localStorage.removeItem("username");
    refresh();
  };

  const handleCartButtonClick = async () => {
    try {
      const response = await fetch(
        "https://localhost:7152/cart/GetCartByUsername/" + username
      );
      const deserializedJSON = await response.json();
      setUsers(deserializedJSON);
    } catch (e) {
      alert(e.message);
    }
    setIsCartVisible(true);
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
              <Link to="/about" onClick={removeHumMenu}>About</Link>
              <Link to="/contact" onClick={removeHumMenu}>Contact</Link>
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
            <div onClick={handleClick} className="login-icon">
              Login
            </div>
          )}
          <div onClick={handleCartButtonClick} className="login-icon">
            {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
            Cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
