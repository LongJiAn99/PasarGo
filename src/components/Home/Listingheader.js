import React from "react";
import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../css/Header.css";
import logo from "../../images/logo.jpg";
import { CgProfile } from "react-icons/cg";
import { Menu, MenuItem } from "@material-ui/core";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const {currentUser, logout} = useAuth()
  const [error, setError] = useState("")
  const history = useHistory()

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };  

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push('/pages/login')
    } catch {
      setError('Failed to log out')
    }
  }

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
                  <MenuItem>
                    <Link
                      to={{
                        pathname: "/pages/profile-page",
                        state: {
                          page: "first",
                        },
                      }}
                      style={{ color: "black" }}
                    >
                      My Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={{
                        pathname: "/pages/profile-page",
                        state: {
                          page: "second",
                        },
                      }}
                      style={{ color: "black" }}
                    >
                      My Listings
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={{
                        pathname: "/pages/profile-page",
                        state: {
                          page: "third",
                        },
                      }}
                      style={{ color: "black" }}
                    >
                      My Wishlist
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={{
                        pathname: "/pages/profile-page",
                        state: {
                          page: "fourth",
                        },
                      }}
                      style={{ color: "black" }}
                    >
                      My Orders
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
                </Menu>
              </div>
            </li>
          ) : (
            <div class="signing-in">
              <li>
                <Link to="/pages/register">Register</Link>
              </li>
              <li>
                <Link to="/pages/login">Login</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
