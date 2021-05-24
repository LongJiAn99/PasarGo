import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="banner header-text">
      <div class="banner-item">
        <div class="text-content">
          <h4>Want to start selling or buying?</h4>
          <h2>Join PasarGo NOW!</h2>
          <button
            type="button"
            class="button"
            onclick="document.location = 'signup.html'"
          >
            <span>Sign Up</span>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
