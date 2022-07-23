import React, { useEffect, createContext } from "react";
import "./cart.css";
import ContextCart from "./ContextCart";

export const CartContext = createContext();

function Cart({ cartusers, handleCartButtonClick}) {

  const removeItem = async (id) => {
    var requestOptions = {
      method: "DELETE",
      mode: "cors",
      redirect: "follow",
    };
    await fetch("https://localhost:7152/cart/" + id, requestOptions);
    handleCartButtonClick();
  };

  const increment = async (id, quantity) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        Quantity: quantity + 1,
      });
      const requestOptions = {
        method: "PUT",
        mode: "cors",
        headers: myHeaders,
        body: body,
        redirect: "follow",
      };
      const response = await fetch(
        "https://localhost:7152/cartdetails/" + id,
        requestOptions
      );
      await response.json();
      handleCartButtonClick();
    } catch (e) {
      alert(e.message);
    }
  };

  const decrement = async (id, quantity) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        Quantity: quantity > 1 ? quantity - 1 : quantity,
      });
      const requestOptions = {
        method: "PUT",
        mode: "cors",
        headers: myHeaders,
        body: body,
        redirect: "follow",
      };
      const response = await fetch(
        "https://localhost:7152/cartdetails/" + id,
        requestOptions
      );
      await response.json();
      handleCartButtonClick();
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    handleCartButtonClick();
    removeItem();
  }, []);

  return (
    <CartContext.Provider
      value={{ cartusers, removeItem, increment, decrement}}>
      <ContextCart />
    </CartContext.Provider>
  );
}

export default Cart;
