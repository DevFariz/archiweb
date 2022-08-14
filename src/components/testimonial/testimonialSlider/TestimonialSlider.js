import Slider from "react-slick";
import React, { Component } from "react";

import "./testimonialSlider.scss";
import TestimonialSlide from "./testimonialSlide/TestimonialSlide";

class TestimonialSlider extends Component {

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
    const { data } = this.props;
    const {windowWidth} = this.state;

    const slides = data.map((item) => {
      const { id, ...otherProps } = item;
      return <TestimonialSlide key={id} {...otherProps} />;
    });

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      appendDots: dots => (
        <div
          style={{
            marginTop: windowWidth > 768 ? "70px" : "30px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <ul style={{ display: "flex"}}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <button
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            border: "none",
            marginLeft: "20px",
            cursor: "pointer"
          }}
        >
        </button>
      ),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false
          }
        }
      ]
    };
    return <Slider className="testimonial-slider" {...settings}>{slides}</Slider>;
  }
}

export default TestimonialSlider;
