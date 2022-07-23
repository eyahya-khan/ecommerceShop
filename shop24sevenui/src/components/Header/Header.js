import "./style.css";
import React, { useState } from "react";
import Navbar from "./Navbar";

function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <>
      <Navbar
        isCartVisible={isCartVisible}
        users={users}
        setUsers={setUsers}
        setIsCartVisible={setIsCartVisible}
      />
    </>
  );
}

export default Header;
