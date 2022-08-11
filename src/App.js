import React, { Component } from 'react';

import Header from './components/header/Header';
import Intro from './components/intro/Intro';

import "./App.scss"

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Intro />
      </>
    )
  }
}
