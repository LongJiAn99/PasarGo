import React from "react";
import "../css/Banner.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Banner = () => {
  const { currentUser } = useAuth();

  return (
    <div class="banner header-text">
      {!currentUser ? (
        <div class="banner-item">
          <div class="text-content">
            <h4>Want to start selling or buying?</h4>
            <h2>Join PasarGo NOW!</h2>
            <button type="button" class="button" onClick="./pages/register">
              <Link to="/pages/register">
                <span>Sign Up</span>
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div class="banner-item-loggedin">
          <div class="text-content">
            <h4>Welcome to PasarGo!</h4>
            <h2>Start Browsing</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
