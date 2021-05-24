import React from "react";
import Scrollbar from "../Scrollbar";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Categories</h2>
            </div>
          </div>
          <Scrollbar />
        </div>
      </div>
    </div>
  );
};

export default Categories;
