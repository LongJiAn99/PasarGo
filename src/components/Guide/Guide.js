import React from "react";
import "./Guide.css";

const Guide = () => {
  return (
    <div className="guide">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>How it works!</h2>
            </div>
          </div>
          <div className = "infographics">
          <div className="col-md-6">
            <div className="left-content">
            <img src="assets/images/feature-image.jpg" alt="picture here" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="middle-content">
              <img src="assets/images/feature-image.jpg" alt="picture here" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-content">
              <img src="assets/images/feature-image.jpg" alt="picture here" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
