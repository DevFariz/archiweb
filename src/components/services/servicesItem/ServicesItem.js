import React, { Component } from 'react';

import "./ServicesItem.scss"

export default class ServicesItem extends Component {
  render() {
    const {image, name, desc} = this.props
    return (
      <div className='services-item'>
        <img src={image} alt="services" className="services-item__img" />
        <h4 className="services-item__title">{name}</h4>
        <p className="services-item__desc">{desc}</p>
      </div>
    )
  }
}
