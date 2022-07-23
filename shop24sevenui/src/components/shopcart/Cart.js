import React, { useEffect, useState } from "react";
import "./cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Item";
import { Link } from "react-router-dom";

function Cart({ cartusers, handleCartButtonClick}) {
  const [itemQuant, setItemQuant] = useState();


  const removeItem = async (id) => {
    var requestOptions = {
      method: "DELETE",
      mode: "cors",
      redirect: "follow",
    };
    await fetch("https://localhost:7152/cart/" + id, requestOptions);
    handleCartButtonClick();
  };

  const increaseQuantity = async (id) => {
    setItemQuant(itemQuant + 1);
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        Quantity: itemQuant,
      });
      const requestOptions = {
        method: "PUT",
        mode: "cors",
        headers: myHeaders,
        body: body,
        redirect: "follow",
      };
      const response = await fetch(
        "https://localhost:7152/cart/" + id,
        requestOptions
      );
      await response.json();
      handleCartButtonClick();
      // setUsers(deserializedJSON);
      // getData();
      // setTitle("");
      // setDescription("");
      // setUpdateVisibility(false);
    } catch (e) {
      alert(e.message);
    }
  };

  const selectUser = (id, quantity) => {
   setItemQuant()
    // setInitialId(id);
  };


  useEffect(() => {
    handleCartButtonClick();
    removeItem();
  }, []);

  return (
    <>
      <header className="cart-header">
        <div className="continue-shopping">
          <Link to = "/product">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
          </Link>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{cartusers.length}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{cartusers.length}</span>{" "}
          items in shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {cartusers.map((Item) => {
                return (
                  <Items 
                  key={Item.cartId} 
                  {...Item} 
                  removeItem={removeItem} 
                  increaseQuantity={increaseQuantity}
                  itemQuant = {itemQuant}
                  />
                );
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Total :{" "}
            <span>
              {cartusers.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}{" "}
              SEK
            </span>
          </h3>
          <button>
           <Link to = "/multistepform">Checkout</Link>
            </button>
          <button className="clear-cart">Clear Cart</button>
        </div>
      </section>
    </>
  );
}

export default Cart;
