import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Guide List </Link>
          <Link to="/about"> Student Registration </Link>
          <Link to="/contact"> Login </Link>
          <Link to="/contact"> Admin </Link>
        </div>
      </div>
      <div className="rightSide">
      <Link to="/"> Home </Link>
          <Link to="/menu"> Guide List </Link>
          <Link to="/about"> Student Registration </Link>
          <Link to="/contact"> Login </Link>
          <Link to="/contact"> Admin </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
