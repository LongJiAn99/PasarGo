import React from "react";
import "./css/Guide.css";
import listicon from "../images/listicon.png"
import chaticon from "../images/chaticon.png"
import sellicon from "../images/sellicon.png"
import browseicon from "../images/browseicon.png"
import buyicon from "../images/buyicon.png"

const Guide = () => {
  return (
    <div className="guide" id = 'guide'>
      <div className="container">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>How it works</h2>
            </div>
          </div>
          <div className = "sub-section-heading">
            <h3>For the seller:</h3>
            </div>
          <div className = "infographics">
          <div className="col-4">
            <div className="left-content">
            <img src={listicon} alt="" />
            <h4>List your product or service</h4>
            <p>Select the cateogory in which your product or service belongs to and simply click on New Listing</p>
            </div>
          </div>
          <div className="col-4">
            <div className="middle-content">
              <img src= {chaticon} alt="" />
              <h4>Chat with potential buyers</h4>
            <p>Once one or more potential buyers makes an offer, a chat function will be availale for you to chat with your buyer!</p>
            </div>
          </div>
          <div className="col-4">
            <div className="right-content">
              <img src= {sellicon} alt="" />
              <h4>Sell</h4>
            <p>Finalise the deal once the buyer or buyers have confirmed their modes of payment and delivery</p>
            </div>
          </div>
          </div>
          <br/>
          <div className = "sub-section-heading">
            <h3>For the buyer:</h3>
            </div>
          <div className = "infographics">
          <div className="col-4">
            <div className="left-content">
            <img src={browseicon} alt="" />
            <h4>Browse the categories</h4>
            <p>Select the cateogory which you are interested in the browse the products or services in that category</p>
            </div>
          </div>
          <div className="col-4">
            <div className="middle-content">
              <img src= {chaticon} alt="" />
              <h4>Chat with the sellers</h4>
            <p>Found a product or service you are interested in? Go ahead an list an offer or chat with the seller to know more</p>
            </div>
          </div>
          <div className="col-4">
            <div className="right-content">
              <img src={buyicon} alt="" />
              <h4>Buy</h4>
            <p>Once you have agreed on the modes of payment and delivery with the seller, just finalise the deal</p>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Guide;
