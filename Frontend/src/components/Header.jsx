import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top topnav">
        <Link className="navbar-brand" to="/">Go-Bicikli</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link color-white" to="/">Kezdőlap</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">Kategóriák</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Bolt</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Kapcsolat</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/insert-new-item">Új termék</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/shopping-cart">
                <img style={{ height: "30px" }} src="../assets/icons/shopping-cart-white.png" alt="Cart" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
