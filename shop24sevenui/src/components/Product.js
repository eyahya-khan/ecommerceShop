import React, { useContext, useEffect } from "react";
import AlertMessage from "./Alert/AlertMessage";
import { GlobalContext } from "../App";
import { Div } from "./product.styled";
// import SearchForm from "./Search/SearchForm";

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
                      src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
                      alt="img"
                    />
                    {/* <img src="./hb.jpg" width="200px" height="200px" alt="img"/> */}
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

