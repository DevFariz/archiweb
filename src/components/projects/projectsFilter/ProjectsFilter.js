import React, { Component } from "react";

import "./ProjectsFilter.scss";

export default class ProjectsFilter extends Component {
  render() {
    const { onFilterProjects, filter } = this.props;
    const buttonsData = [
      { name: "all", label: "All" },
      { name: "furniture", label: "Furniture" },
      { name: "design", label: "Design" },
      { name: "house", label: "House" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
      const active = filter === name;
      const clazz = active ? "projects__btn_active projects__btn" : "projects__btn";

      return (
        <button className={clazz} key={name} onClick={() => onFilterProjects(name)}>
          {label}
        </button>
      );
    });

    return <div>{buttons}</div>;
  }
}
