import React, { Component } from 'react';

import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Services from './components/services/Services';

import "./App.scss";
import Services01 from "./assets/svg/services-01.svg";
import Services02 from "./assets/svg/services-02.svg";
import Services03 from "./assets/svg/services-03.svg";
import About from './components/about/About';

export default class App extends Component {

  state = {
    services: [
      {id: 1, image: Services01, name: "planning", desc: "Our Services Line one Servive line two"},
      {id: 2, image: Services02, name: "interior", desc: "Our Services Line one Servive line two"},
      {id: 3, image: Services03, name: "exterior", desc: "Our Services Line one Servive line two"},
    ]
  }

  render() {
    const {services} = this.state;

    return (
      <>
        <Header />
        <Intro />
        <Services data={services}/>
        <About />
      </>
    )
  }
}
