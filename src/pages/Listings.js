import React from "react";
import Header from '../components/Header'
import Products from '../pages/Listings/Products'
import CheckBox from '../components/Listings/CheckBox'


const Listings = () => {
  return (
    <div className = "listings" id="listings">
      <Header />
      <CheckBox />
      <Products />
    </div>
  );
};

export default Listings;
