import React from "react";
import { useState } from "react";
import AlertMessage from "./Alert/AlertMessage";

function Product() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://localhost:7152/products");
      const deserializedJSON = await response.json();
      setUsers(deserializedJSON);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <div className="btn load-data">
            <button className="btn-load" onClick={getData}>
              Load all products...
            </button>
          </div>
          <div className="product-container">
            {users.map((item) => {
              return (
                <div>
                  <div className="product-img">
                    <img
                      src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
                      alt="img"
                    />
                    {/* <img src="./hb.jpg" width="200px" height="200px" alt="img"/> */}
                  </div>
                  <h2>{item.productName}</h2>
                  <p>{item.price} SEK</p>
                  <AlertMessage
                    productId={item.productId}
                    productName={item.productName}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
