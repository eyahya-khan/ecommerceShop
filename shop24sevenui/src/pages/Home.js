import React, {useContext} from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

function Home() {
  const {getData} = useContext(GlobalContext)
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
