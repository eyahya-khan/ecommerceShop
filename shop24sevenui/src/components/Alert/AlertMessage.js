import "./Alert.css";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";


const AlertMessage = ({ productId, productName, price, image, countContext }) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const cartuniqueid = uuid();


  const sendToCartdisplay = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        CartUniqueId: cartuniqueid,
        UserName: localStorage.getItem("username"),
        ProductId: productId,
        ProductName: productName,
        Price: price,
        Image: image,
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
        "https://localhost:7152/cartdisplay",
        requestOptions
      );
      await response.json();
    } catch (e) {
      alert(e.message);
    }
  };

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
    sendToCartdisplay();
    sendToCart();
    sendToCartDetails();
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>Add to cart</button>
      <button onClick={()=> countContext.countDispatch('increment')}>Counter</button>

      <div className="counter-container">
          <div className="counter-inner">
          </div>
        </div>

      {isAlertVisible && (
        <div className="alert-container">
          <div className="alert-inner">
            <p>1 &times; {productName} is added successfully</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertMessage;
