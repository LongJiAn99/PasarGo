import React from "react";
import Header from '../components/Header'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Guide from '../components/Guide'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className = "home" id="home">
      <Header />
      <Banner />
      <Categories />
      <Guide />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
