import { Component } from "react";
import IntroSlider from "react-slick";

import "./Slider.scss";
import SliderImg from "../../../assets/slider-pic-01.jpg";
import LeftArrow from "../../../assets/svg/left-arrow.svg";
import RightArrow from "../../../assets/svg/right-arrow.svg";


class Slider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <button type="button" data-role="none" className="slick-arrow slick-prev" style={{display: "block"}}>
        <img src={LeftArrow} alt="arrow" />
      </button>,
      nextArrow: <button type="button" data-role="none" className="slick-arrow slick-next" style={{display: "block"}}>
        <img src={RightArrow} alt="arrow" />
      </button>
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
