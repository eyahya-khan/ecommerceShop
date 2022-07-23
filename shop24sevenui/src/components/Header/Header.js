import "./style.css";
import React, { useState } from "react";
import Navbar from './Navbar';
// import Cart from "../shopcart/Cart";
// import Cart from "../Cart/Cart";
// import { Products } from "../shoppingCart/products";

function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <>
    <Navbar 
    setUsers = {setUsers}
    setIsCartVisible = {setIsCartVisible}
    />
    
    {/* <Cart 
    users = {users}
    isCartVisible={isCartVisible} 
    setIsCartVisible = {setIsCartVisible}
    /> */}

{/* <Products users = {users}/> */}
{/* <Cart users = {users}/> */}
</>
  )
}

export default Header
