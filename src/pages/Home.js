import React from "react";
import Header from '../components/Home/Header'
import Banner from '../components/Home/Banner'
import Categories from '../components/Home/Categories'
import Guide from '../components/Home/Guide'
import About from '../components/Home/About'
import Footer from '../components/Home/Footer'

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
