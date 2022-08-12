import React, { Component } from "react";

import ServicesItem from "./servicesItem/ServicesItem";

import "./Services.scss";

export default class Services extends Component {
  render() {
    const elements = this.props.data.map((item) => {
      const { id, ...otherProps } = item;
      return <ServicesItem key={id} {...otherProps} />;
    });

    return (
      <section className="services">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 45 }}>
            Our Services
          </h2>
          <div className="services-container">{elements}</div>
        </div>
      </section>
    );
  }
}
