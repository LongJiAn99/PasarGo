import React from "react";
import "../css/Scrollbar.css";
import foodicon from "../../images/foodicon.png";
import womenfashionicon from "../../images/womenfashionicon.png";
import menfashionicon from "../../images/menfashionicon.png";
import artsicon from "../../images/artsicon.png";
import beautyicon from "../../images/beautyicon.png";
import eventicon from "../../images/eventicon.png";
import peticon from "../../images/peticon.png";
import eduicon from "../../images/eduicon.png";
import { Link } from "react-router-dom";

const Scrollbar = () => {
  return (
    <div className="scrollbar">
      <div className="col-md-2">
        <div className="product-item">
          <Link
            to={{
              pathname: "../pages/listings",
              state: {
                category: "food",
                type: "listing"
              },
            }}
          >
            <img src={foodicon} alt = '' />
            <h3>Food</h3>
          </Link>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
          <Link
            to={{
              pathname: "../pages/listings",
              state: {
                category: "men's fashion",
                type: "listing",
              },
            }}
          >
            <img src={menfashionicon} alt = '' />
            <h3>Men's Fashion</h3>
          </Link>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
          <Link
            to={{
              pathname: "../pages/listings",
              state: {
                category: "women's fashion",
                type: "listing",
              },
            }}
          >
            <img src={womenfashionicon} alt = '' />
            <h3>Women's Fashion</h3>
          </Link>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
          <Link
            to={{
              pathname: "../pages/listings",
              state: {
                category: "arts and craft",
                type: "listing",
              },
            }}
          >
            <img src={artsicon} alt = '' />
            <h3>Arts & Craft</h3>
          </Link>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
          <Link
            to={{
              pathname: "../pages/listings",
              state: {
                category: "health and beauty",
                type: "listing",
              },
            }}
          >
            <img src={beautyicon} alt = '' />
            <h3>Health & Beauty</h3>
          </Link>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
        <Link
            to={{
              pathname: "../pages/listings",
              state: {
                category: "event planning",
                type: "listing",
              },
            }}
          >
            <img src={eventicon} alt = '' />
            <h3>Event Planning</h3>
          </ Link>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
        <Link
            to={{
              pathname: "../pages/listings",
              state: {
                category: "pet grooming",
                type: "listing",
              },
            }}
          >
            <img src={peticon} alt = '' />
            <h3>Pet Grooming</h3>
          </Link>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
        <Link
            to={{
              pathname: "../pages/listings",
              state: {
                category: "education",
                type: "listing",
              },
            }}
          >
            <img src={eduicon} alt = '' />
            <h3>Education</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Scrollbar;
