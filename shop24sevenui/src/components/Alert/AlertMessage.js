import "./Alert.css";
import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../../App";
import { Button, Div} from "../product.styled";

const AlertMessage = ({ productId, productName }) => {
  const { counter, setCounter } = useContext(GlobalContext);

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const cartuniqueid = uuid();

  const sendToCart = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        CartUniqueId: cartuniqueid,
        UserName: localStorage.getItem("username"),
      });
      const requestOptions = {
        method: "POST",
        mode: "cors",
        headers: myHeaders,
        body: body,
        redirect: "follow",
      };
      const response = await fetch(
        "https://localhost:7152/cart",
        requestOptions
      );
      await response.json();
    } catch (e) {
      alert(e.message);
    }
  };

  const sendToCartDetails = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        CartUniqueId: cartuniqueid,
        ProductId: productId,
        Quantity: 1,
      });
      const requestOptions = {
        method: "POST",
        mode: "cors",
        headers: myHeaders,
        body: body,
        redirect: "follow",
      };
      const response = await fetch(
        "https://localhost:7152/cartdetails",
        requestOptions
      );
      await response.json();
    } catch (e) {
      alert(e.message);
    }
  };

  const handleButtonClick = () => {
  const username = localStorage.getItem("username");
  if(username) {
  sendToCart();
  sendToCartDetails();
  setCounter(counter + 1);
  setIsAlertVisible(true);
  setTimeout(() => {
  setIsAlertVisible(false);
  }, 3000);
}else{
alert('Login first!')
}
};

  return (
    <>
    <Div>
      <Button onClick={handleButtonClick}>Add to cart</Button>
    </Div>
      {isAlertVisible && (
        <div className="alert-container">
          <div className="alert-inner">
            <p>1 &times; {productName} is added successfully</p>
          </div>
        </div>
      )}
      </>
  );
};

export default AlertMessage;
