import React from "react";
import "./css/Scrollbar.css";
import foodicon from "../images/foodicon.png";
import womenfashionicon from '../images/womenfashionicon.png'
import menfashionicon from '../images/menfashionicon.png'
import artsicon from '../images/artsicon.png'
import beautyicon from '../images/beautyicon.png'
import eventicon from '../images/eventicon.png'
import peticon from '../images/peticon.png'
import eduicon from '../images/eduicon.png'
import webicon from '../images/webicon.png'
import { Link } from "react-router-dom";

const Scrollbar = () => {
  return (
    <div className="scrollbar">
      <div className="col-md-2">
        <Link to={{
          pathname: '../pages/listings',
          state: {
            category: 'food'
          }
        }}>
        <div className="product-item">
            <img src={foodicon} />
            <h3>Food</h3>
        </div>
        </Link>
      </div>
      <div className="col-md-2">
        <div className="product-item">
          <a href="#">
            <img src={menfashionicon} />
            <h3>Men's Fashion</h3>
          </a>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
          <a href="#">
            <img src={womenfashionicon} />
            <h3>Women's Fashion</h3>
          </a>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
          <a href="#">
            <img src={artsicon} />
            <h3>Arts & Craft</h3>
          </a>
        </div>
      </div>
      <div className="col-md-2">
      <Link to={{
          pathname: '../pages/listings',
          state: {
            category: 'health and beauty'
          }
        }}>
        <div className="product-item">
          <a href="#">
            <img src={beautyicon} />
            <h3>Health & Beauty</h3>
          </a>
        </div>
        </ Link>
      </div>
      <div className="col-md-2">
        <div className="product-item">
          <a href="#">
            <img src={eventicon} />
            <h3>Event Planning</h3>
          </a>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
          <a href="#">
            <img src={peticon} />
            <h3>Pet Grooming</h3>
          </a>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
          <a href="#">
            <img src={eduicon} />
            <h3>Education</h3>
          </a>
        </div>
      </div>
      <div className="col-md-2">
        <div className="product-item">
          <a href="#">
            <img src={webicon} />
            <h3>Web Design</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Scrollbar;
