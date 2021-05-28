import React from "react";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./css/Header.css";
import logo from "./images/logo.jpg";
import { CgProfile } from "react-icons/cg";
import { Menu, MenuItem, Avatar } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const {currentUser} = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue((v) => !v);
    }, []);
    return [value, toggle];
  }

  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <div className="logobrand">
              <img src={logo} width="100px" alt="" />
              <h2>
                Pasar<em>Go!</em>
              </h2>
            </div>
          </Link>
          <button type="button" className="nav-btn" onClick={toggleIsOpen}>
            <FaBars className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavHashLink smooth to="#categories">
              Browse
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="#guide">
              Guide
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="#about">
              About
            </NavHashLink>
          </li>
          {currentUser ? (
            <li>
              <div className="dropdown">
                <CgProfile
                  size={28}
                  alt="test"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                />
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem>My Profile</MenuItem>
                  <MenuItem>My Listings </MenuItem>
                  <MenuItem>My Wishlist</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </div>
            </li>
          ) : (
            <div class = 'signing-in'>
              <li>
                <Link to="./pages/register">Register</Link>
              </li>
              <li>
                <Link to="./pages/Login">Login</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
