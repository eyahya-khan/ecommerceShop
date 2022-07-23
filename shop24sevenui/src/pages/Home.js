import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home({ getData }) {
  return (
    <div className="section-home">
      <p>The place for luxury</p>
      <p>Shop your favorites from us</p>
      <div className="btn-explore">
        <Link to="/product" onClick={getData}>
          Explore
        </Link>
      </div>
    </div>
  );
}

export default Home;
