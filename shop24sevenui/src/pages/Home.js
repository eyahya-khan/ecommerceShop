import React, { useContext } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

const Home = () => {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div className="category-container">
      <div className="cat-cont-first-row">
        <Link to="/product">
          <div
            className="cat-cont-row"
            onClick={() => dispatch({ type: "men" })}
          >
            <img src="./images/men.png" alt="men" />
            <div className="text-content">
              <h1>Men</h1>
            </div>
          </div>
        </Link>
        <Link to="/product">
          <div
            className="cat-cont-row"
            onClick={() => dispatch({ type: "women" })}
          >
            <img src="./images/womens.png" alt="women" />
            <div className="text-content">
              <h1>Women</h1>
            </div>
          </div>
        </Link>
      </div>
      <div className="cat-cont-second-row">
        <Link to="/product">
          <div
            className="cat-cont-row"
            onClick={() => dispatch({ type: "sneaker" })}
          >
            <img src="./images/sneakers.png" alt="sneaker" />
            <div className="text-content">
              <h1>Sneaker</h1>
            </div>
          </div>
        </Link>
        <Link to="/product">
          <div
            className="cat-cont-row"
            onClick={() => dispatch({ type: "hat" })}
          >
            <img src="./images/blue-snapback.png" alt="hat" />
            <div className="text-content">
              <h1>Hat</h1>
            </div>
          </div>
        </Link>
        <Link to="/product">
          <div
            className="cat-cont-row"
            onClick={() => dispatch({ type: "jackets" })}
          >
            <img src="./images/jackets.png" alt="jacket" />
            <div className="text-content">
              <h1>Jacket</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
