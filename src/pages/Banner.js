import React from "react";
import "./css/Banner.css";
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <div class="banner header-text" id = 'home'>
      <div class="banner-item">
        <div class="text-content">
          <h4>Want to start selling or buying?</h4>
          <h2>Join PasarGo NOW!</h2>
          <Link to="/pages/register">
          <button
            type="button"
            class="button"
            >
            <span>Sign Up</span>
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
