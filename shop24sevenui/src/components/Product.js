import React, { useEffect } from "react";
import AlertMessage from "./Alert/AlertMessage";

function Product({ users, getData }) {
  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <div className="container">
        <div>
          <div className="btn load-data"></div>
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
                    {...item}
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
