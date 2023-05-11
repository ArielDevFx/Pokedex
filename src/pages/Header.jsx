import React from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-red">
        <Link to="/pokedex">
          <img src="/title.png" className="header-img" />
        </Link>
        <div className="header-black"></div>
      </div>
    </div>
  );
};

export default Header;
