import React from "react";
import aboutus from "../images/aboutus.jpg";
import "./css/About.css";

const About = () => {
  return (
    <div class="about-us" id = 'about'>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>About PasarGo</h2>
            </div>
          </div>
          <div class="col-md-8">
            <div class="left-content">
              <h4>Our mission</h4>
              <p>
                PasarGo is a startup initiative brought to you by two friends
                that aims to help people start their dream business more easily
                by providing them with a safe platform to grow their business.
                At the same time, we want to make it easier for shoppers to seek
                the local goods that they want more conveniently and
                efficiently.
              </p>
              <p>Main Features:</p>
              <ul class="featured-list">
                <li>
                  Go-to website for startups to publicise and market their work
                  and services for others and sellers looking to support local
                  businesses
                </li>
                <li>
                  Communication platform between multiple buyers and sellers{" "}
                </li>
                <li>
                  Categorisation of products and services for easier navigation
                  of the web app to improve user experience
                </li>
                <li>Group ordering system</li>
                <li>
                  Announcement channel to inform customers and sellers upon
                  completion of orders
                </li>
                <li>
                  Dispute management channel to assist any disputes in payment
                  or wrong orders
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="right-image">
              <img src={aboutus} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
