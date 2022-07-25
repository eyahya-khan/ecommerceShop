import React from "react";
import "./category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category-container">
		<div className="cat-cont-first-row">
      <div className="cat-cont-row">
        <img src="./images/men.png" alt="Notebook" />
        <div className="text-content">
          <h1>Men</h1>
        </div>
      </div>
      <div className="cat-cont-row">
        <img src="./images/womens.png" alt="Notebook" />
        <div className="text-content">
          <h1>Women</h1>
        </div>
      </div>
	  </div>
	  <div className="cat-cont-second-row">
	  <div className="cat-cont-row">
        <img src="./images/sneakers.png" alt="Notebook" />
        <div className="text-content">
          <h1>Sneaker</h1>
        </div>
      </div>
	  <div className="cat-cont-row">
		<Link to ="/product">
        <img src="./images/blue-snapback.png" alt="Notebook" />
        <div className="text-content">
          <h1>Hat</h1>
        </div>
		</Link>
      </div>
	  <div className="cat-cont-row">
        <img src="./images/jackets.png" alt="Notebook" />
        <div className="text-content">
          <h1>Jacket</h1>
        </div>
      </div>
	  </div>
    </div>
  );
};

export default Category;
