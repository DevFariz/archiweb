import React, { Component } from "react";

import "./About.scss";

import AboutPic from "../../assets/about.jpg";

class About extends Component {
  state = {
    windowWidth: 0,
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  render() {
    const { windowWidth } = this.state;
    return (
      <section className="about">
        <div className="container">
          <div className="about-container">
            <img src={AboutPic} alt="about" />
            <div className="about-content">
              <h2
                className="section-title"
                style={
                  windowWidth > 720
                    ? { marginBottom: "25px" }
                    : { marginBottom: "10px" }
                }
              >
                About Us
              </h2>
              <p className="about__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
              <a href="#a" className="about__link">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
