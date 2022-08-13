import React, { Component } from "react";

import "./ProjectsFilter.scss";

export default class ProjectsFilter extends Component {
  render() {
    const { onFilterProjects } = this.props;
    const buttonsData = [
      { name: "all", label: "All" },
      { name: "furniture", label: "Furniture" },
      { name: "design", label: "Design" },
      { name: "house", label: "House" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
      return (
        <button className="projects__btn" key={name} onClick={() => onFilterProjects(name)}>
          {label}
        </button>
      );
    });

    return <div>{buttons}</div>;
  }
}
