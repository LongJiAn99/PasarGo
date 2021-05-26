import React, { Component } from "react";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";
import "./css/Header.css";
import logo from "./images/logo.jpg";
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import { CgProfile } from "react-icons/cg";
import {
  Menu,
  MenuItem,
} from "@material-ui/core";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = (firebase) => {
      handleClose();
      firebase.auth().signOut();
    };

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
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaBars className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
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
                {({ user, firebase }) => (
                  <div>
                    <CgProfile
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
                      <MenuItem onClick={() => handleLogout(firebase)}>
                        Logout
                      </MenuItem>
                    </Menu>
                  </div>
                )}
              </IfFirebaseUnAuthed>
              <IfFirebaseAuthed>
                <NavHashLink smooth to="#signup">
                  Log out
                </NavHashLink>
              </IfFirebaseAuthed>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
