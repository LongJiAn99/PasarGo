import React from "react";
import Header from './Header'
import Banner from './Banner'
import Categories from './Categories'
import Guide from './Guide'
import About from './About'
import Footer from './Footer'

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
