import "./App.css";
import React, { useState, createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Header from "./components/Header/Header";
import MultiForm from "./components/MultiStepForm/MultiForm";
import Cart from "./components/shopcart/Cart";
import Main from "./components/Admin/Main";
import SignupForm from "./components/Signup/SignupForm";
import Home from "./pages/Home";

export const GlobalContext = createContext();

const initialvalue = "";
const reducer = (state, action) => {
  console.log("action: ", action);
  console.log("state: ", state);
  if (action.type === "men") return (state = "men");
  if (action.type === "women") return (state = "women");
  if (action.type === "sneaker") return (state = "sneaker");
  if (action.type === "hat") return (state = "hat");
  if (action.type === "jackets") return (state = "jackets");
  return state;
};
function App() {
  const [users, setUsers] = useState([]);
  const [cartusers, setCartUsers] = useState([]);
  const [counter, setCounter] = useState(0);
  const username = localStorage.getItem("username");
  const [popup, setPopup] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialvalue);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://localhost:7152/products/GetProductByCategory/" + state
      );
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
          popup,
          setPopup,
          dispatch,
        }}
      >
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/admin" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/multistepform" element={<MultiForm />} />
          </Routes>
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
