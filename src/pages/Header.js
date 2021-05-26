import React, { Component } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import './css/Header.css'
import logo from "./images/logo.jpg";


export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <NavHashLink smooth to="#home">
              <div className = 'logobrand'>
              <img src={logo} width="100px" alt="" />
              <h2>Pasar<em>Go!</em></h2>
              </div>
            </NavHashLink>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            ><FaBars className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <NavHashLink smooth to="#home">Home</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#categories">Browse</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#guide">Guide</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#about">About</NavHashLink>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}