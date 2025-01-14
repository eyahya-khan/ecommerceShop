import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ cartId, productName, price, quantity, image }) => {
  const { removeItem, increment, decrement} = useContext(CartContext);
  
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src= {"./images/" + image} alt="iamge" />
        </div>

        <div className="title">
          <h2>{productName}</h2>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={()=>decrement(cartId, quantity)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(cartId, quantity)}></i>
        </div>

        <div className="price">
          <h3>{price * quantity} SEK</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove" onClick = {()=> removeItem(cartId)}></i>  
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
