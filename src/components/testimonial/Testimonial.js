import React, { Component } from "react";

import TestimonialSlider from "./testimonialSlider/TestimonialSlider";

import "./Testimonial.scss";
import Testimonial01 from "../../assets/testimonial-01.jpg";
import Testimonial02 from "../../assets/testimonial-02.jpg";

class Testimonial extends Component {
  render() {

    const testimonials = [
      {id: 1, image: Testimonial01, author: "James Passaquindici Arcand", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"},
      {id: 2, image: Testimonial02, author: "Abram Schleifer", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"},
      {id: 3, image: Testimonial01, author: "Abram Noyer", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"},
      {id: 4, image: Testimonial02, author: "Abram Akif", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"},
      {id: 5, image: Testimonial02, author: "Natiq Schleifer", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"},
      {id: 6, image: Testimonial02, author: "Abram Schleifer", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"}
    ]

    return (
      <section className="testimonial">
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          Testimonial
        </h2>
        <div className="container">
          <TestimonialSlider data={testimonials}/>
        </div>
      </section>
    );
  }
}

export default Testimonial;
