import React, { Component } from "react";

import "./ProjectsItem.scss";

export default class ProjectsItem extends Component {
  render() {
    const { image, desc } = this.props;
    return (
      <div className="project-item">
        <img src={image} alt="project" />
        <p className="project-item__desc">
          {desc}
        </p>
      </div>
    );
  }
}
