import React, { Component } from "react";

import "./Footer.scss";
import Map from "../../assets/footer-map.jpg";

import Facebook from "../../assets/svg/facebook.svg";
import Twitter from "../../assets/svg/twitter.svg";
import Instagram from "../../assets/svg/instagram.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-block">
              <p className="footer__logo">ArchiWeb</p>
              <p className="footer__text footer__text_first">
                Archiweb is an architectural consultant based in Berlin,
                Germany. We provide solutions for your architecture and
                residential design
              </p>
              <ul className="footer-social">
                <li className="footer-social__item">
                  <a href="#a" className="footer-social__link">
                    <img src={Facebook} alt="facebook" />
                  </a>
                </li>
                <li className="footer-social__item">
                  <a href="#a" className="footer-social__link">
                    <img src={Twitter} alt="twiiter" />
                  </a>
                </li>
                <li className="footer-social__item">
                  <a href="#a" className="footer-social__link">
                    <img src={Instagram} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-block">
              <h4 className="footer__title">Articles</h4>
              <p className="footer__text">
                7 Tips for Kids Friendly Interior Design
              </p>
              <p className="footer__text">Smart Tips for Changing a Room</p>
              <p className="footer__text">Eco-friendly design</p>
            </div>
            <div className="footer-block">
              <h4 className="footer__title">Links</h4>
              <a href="#a" className="footer__text">
                Link 1
              </a>
              <a href="#a" className="footer__text">
                Link 2
              </a>
              <a href="#a" className="footer__text">
                Link 3
              </a>
            </div>
            <div className="footer-block">
              <h4 className="footer__title">Location</h4>
              <img src={Map} alt="map" className="footer__img" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
