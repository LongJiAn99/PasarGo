import React from "react";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";
import "./css/Header.css";
import logo from "./images/logo.jpg";
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import { CgProfile } from "react-icons/cg";
import { Menu, MenuItem, Toolbar } from "@material-ui/core";

const Header = () => {

  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }
  
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <NavHashLink smooth to="#home">
            <div className="logobrand">
              <img src={logo} width="100px" alt="" />
              <h2>
                Pasar<em>Go!</em>
              </h2>
            </div>
          </NavHashLink>
          <button type="button" className="nav-btn" onClick={toggleIsOpen}>
            <FaBars className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <NavHashLink smooth to="#home">
              Home
            </NavHashLink>
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
          <li>
            <IfFirebaseUnAuthed>
              <NavHashLink smooth to="#signup">
                Login
              </NavHashLink>
            </IfFirebaseUnAuthed>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
