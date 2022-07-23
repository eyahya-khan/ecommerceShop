import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Item";
import { Link } from "react-router-dom";
import { CartContext } from "./Cart";


function ContextCart() {
  const { cartusers} = useContext(CartContext);

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
  )
}

export default ContextCart