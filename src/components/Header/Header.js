import React from "react";
import logo from "../images/logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="logo">
            <a href="index.html">
              <img
                src= {logo}
                width="50"
                height="50"
                alt="logo"
              />
            </a>
          </div>
          <a className="navbar-brand" href="index.html">
            <h2>
              Pasar <em>Go!</em>
            </h2>
          </a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Categories">
                  Start Browsing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  Guide
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
