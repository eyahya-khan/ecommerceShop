import "./style.css";
import React, { useState } from "react";
import Loginform from './Loginform'
import Navbar from './Navbar';
// import Cart from "../shoppingCart/Cart";
import Cart from "../Cart/Cart";
// import Modal from "../Modal/Modal";

function Header() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [users, setUsers] = useState([]);


  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <>
    <Navbar 
    setUsers = {setUsers}
    handleLoginClick={handleLoginClick} 
    setIsShowLogin={setIsShowLogin}
    setIsCartVisible = {setIsCartVisible}
    />
    <Loginform
    isShowLogin={isShowLogin} 
    // isCartVisible = {isCartVisible}
    // setIsCartVisible ={setIsCartVisible}
    setIsShowLogin={setIsShowLogin}
    />

    {/* <Modal   
    isShowLogin={isShowLogin} 
    setIsShowLogin={setIsShowLogin}
    usernameDisplay={usernameDisplay}
    setUsernameDisplay={setUsernameDisplay}
    /> */}
    
    <Cart 
    users = {users}
    isCartVisible={isCartVisible} 
    setIsCartVisible = {setIsCartVisible}
    />

{/* <Cart users = {users}/> */}
</>
  )
}

export default Header