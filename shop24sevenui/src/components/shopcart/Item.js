import React from "react";
// import { CartContext } from "./Cart";

const Items = ({ CartUniqueId, cartId, productName, price, quantity, removeItem, increaseQuantity, itemQuant, selectUser }) => {
//   const { removeItem, increment, decrement } = useContext(CartContext);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="iamge" />
        </div>

        <div className="title">
          <h2>{productName}</h2>
          <p>car---Id: {itemQuant}</p>
          <p>cartId: {cartId}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus"></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => selectUser(cartId, quantity)}></i>
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