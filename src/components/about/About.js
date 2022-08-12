import React, { Component } from "react";

import "./About.scss";

import AboutPic from "../../assets/about.jpg";

class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="container">
          <div className="about-container">
            <img src={AboutPic} alt="about" />
            <div className="about-content">
              <h2 className="section-title" style={{marginBottom: "25px"}}>About Us</h2>
              <p className="about__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
              <a href="#a" className="about__link">Read more</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
