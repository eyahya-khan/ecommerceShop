import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Home from "./pages/Home";
import Signup from "./components/Signup/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MultiForm from "./components/MultiStepForm/MultiForm";
import Cart from "./components/shopcart/Cart";
import Main from "./components/Admin/Main"
// import Form from "./components/Search/Form";

export const GlobalContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [cartusers, setCartUsers] = useState([]);
  const [counter, setCounter] = useState(0);
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
      <GlobalContext.Provider
        value={{
          counter,
          setCounter,
          getData,
          users,
          cartusers,
          handleCartButtonClick,
        }}
      >
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          {/* <Form/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/admin" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/multistepform" element={<MultiForm />} />
          </Routes>
          <Footer />
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}
export default App;
