import "./cart.css";
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ isCartVisible, setIsCartVisible, users }) => {
  // const [quantity, setQuantity] = useState(1);
  
  // const handleQuantity = () => {
  //   setQuantity(quantity);
  // }

  const removeFromCart = () => {
  };

  const handleClose = () => {
    setIsCartVisible(false);
  };
  return (
    <>
      {isCartVisible && (
        <div className="alert-container">
          <div className="alert-inner">
            <div className="cart-header">
              <h4>Shopping cart</h4>
              <button onClick={handleClose}>&times;</button>
            </div>
            <p className="cart-price">Price</p>
            <hr />
            {users.map((item, key) => {
              return (
                <>
                  <div className="cart-section">
                    <div className="cart-product-img">
                      <img
                        src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
                        alt=""
                      />
                    </div>
                    <div key={item.cartId}>
                      <p>{item.productName}</p>
                      <button onClick={removeFromCart}>Delete</button>

                      {/* <select value={quantity}  onChange = {handleQuantity}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      </select> */}

                    </div>
                    <p>{item.price} SEK</p>
                  </div>
                  <hr />
                </>
              );
            })}
            <hr />
            <div className="total-price">
             <Link to= "/multistepform"><button onClick={handleClose}>Proceed to checkout</button></Link>
              <p>
                Total: {users.reduce((total, item) => total + item.price * item.quantity,0)}
                SEK
              </p>
            </div>
            <hr />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
