import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
       
        <p>Click below to Select Guide </p>
        <Link to="/menu">
          <button>Click</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
