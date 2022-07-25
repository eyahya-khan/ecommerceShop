import React, { useContext, useEffect } from "react";
import AlertMessage from "./Alert/AlertMessage";
import { GlobalContext } from "../App";
import { Div } from "./product.styled";

function Product() {
const {users, getData} = useContext(GlobalContext)

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <div className="container">
        {/* <SearchForm/> */}
          <div className="product-container">
            {users.map((item) => {
              return (
                <div className="product-card">
                  <div className="product-img">
                    <img
                      src= {"./images/" + item.image}
                      alt="img"
                    />
                  </div>
                  <Div>
                  <h2>{item.productName}</h2>
                  <p>{item.price} SEK</p>
                  </Div>
                  <AlertMessage
                    {...item}
                    />
                </div>
              );
            })}
          </div>
      </div>
    </>
  );
}

export default Product;

