import "./App.css";
import React, { useState } from "react";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./components/Signup/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MultiForm from "./components/MultiStepForm/MultiForm";
import Cart from "./components/shopcart/Cart";
// import Form from "./components/Search/Form";

function App() {
  const [users, setUsers] = useState([]);
  const [cartusers, setCartUsers] = useState([]);
  const username = localStorage.getItem("username");

  const getData = async () => {
    try {
      const response = await fetch("https://localhost:7152/products");
      const deserializedJSON = await response.json();
      setUsers(deserializedJSON);
    } catch (e) {
      alert(e.message);
    }
  };

  const handleCartButtonClick = async () => {
    try {
      const response = await fetch(
        "https://localhost:7152/cart/GetCartByUsername/" + username
      );
      const result = await response.json();
      setCartUsers(result);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        {/* <Form/> */}
        <Routes>
          <Route path="/" element={<Home getData={getData} />} />
          <Route
            path="/product"
            element={<Product users={users} getData={getData} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartusers={cartusers}
                handleCartButtonClick={handleCartButtonClick}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/multistepform" element={<MultiForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
