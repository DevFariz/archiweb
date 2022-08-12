import React, { Component } from 'react';

import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Services from './components/services/Services';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Testimonial from './components/testimonial/Testimonial';

import "./App.scss";
import Services01 from "./assets/svg/services-01.svg";
import Services02 from "./assets/svg/services-02.svg";
import Services03 from "./assets/svg/services-03.svg";
import Projects01 from "./assets/projects-01.jpg";
import Projects02 from "./assets/projects-02.jpg";
import Projects03 from "./assets/projects-03.jpg";
import Projects04 from "./assets/projects-04.jpg";
import Projects05 from "./assets/projects-05.jpg";
import Projects06 from "./assets/projects-06.jpg";

export default class App extends Component {

  state = {
    services: [
      {id: 1, image: Services01, name: "planning", desc: "Our Services Line one Servive line two"},
      {id: 2, image: Services02, name: "interior", desc: "Our Services Line one Servive line two"},
      {id: 3, image: Services03, name: "exterior", desc: "Our Services Line one Servive line two"},
    ],
    projects: [
      {id: 1, image: Projects01, desc: "Our Services Line one Servive line two", type: 'furniture'},
      {id: 2, image: Projects02, desc: "Our Services Line one Servive line two", type: 'design'},
      {id: 3, image: Projects03, desc: "Our Services Line one Servive line two", type: 'house'},
      {id: 4, image: Projects04, desc: "Our Services Line one Servive line two", type: 'furniture'},
      {id: 5, image: Projects05, desc: "Our Services Line one Servive line two", type: 'furniture'},
      {id: 6, image: Projects06, desc: "Our Services Line one Servive line two", type: 'house'},
    ]
  }

  render() {
    const {services, projects} = this.state;

    return (
      <>
        <Header />
        <Intro />
        <Services data={services}/>
        <About />
        <Projects data={projects}/>
        <Testimonial/>
      </>
    )
  }
}
