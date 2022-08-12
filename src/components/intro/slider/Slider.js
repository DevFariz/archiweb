import { Component } from "react";
import IntroSlider from "react-slick";

import "./Slider.scss";
import SliderImg from "../../../assets/slider-pic-01.jpg";
import LeftArrow from "../../../assets/svg/left-arrow.svg";
import RightArrow from "../../../assets/svg/right-arrow.svg";


const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <img src={LeftArrow} alt="arrow" />
  </button>
);


const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <img src={RightArrow} alt="arrow" />
  </button>
);

class Slider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />
    };
    return <div className="intro__slider">
      <IntroSlider {...settings}>
        <div className="intro__slider-item">
          <img src={SliderImg} alt="home" />
        </div>
        <div className="intro__slider-item">
          <img src={SliderImg} alt="home" />
        </div>
        <div className="intro__slider-item">
          <img src={SliderImg} alt="home" />
        </div>
      </IntroSlider>
    </div>;
  }
}

export default Slider;
