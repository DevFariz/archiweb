import React from "react";

import "./TestimonialSlide.scss";

function TestimonialSlide({ image, author, feedback }) {
  return (
    <div className="testimonial-item">
      <img src={image} alt="person" className="testimonial-item__img" />
      <div className="testimonial-item__content">
        <h4 className="testimonial-item__title">{author}</h4>
        <p className="testimonial-item__text">{feedback}</p>
      </div>
    </div>
  );
}

export default TestimonialSlide;
