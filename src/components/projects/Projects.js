import React, { Component } from "react";

import ProjectsItem from "./projectsItem/ProjectsItem";
import ProjectsFilter from "./projectsFilter/ProjectsFilter";

import "./Projects.scss";

export default class Projects extends Component {
  render() {
    const { data, filter, onFilterProjects } = this.props;

    const projects = data.map((item) => {
      const { id, ...otherProps } = item;
      return <ProjectsItem key={id} {...otherProps} />;
    });

    return (
      <section className="projects">
        <div className="container">
          <div className="projects-top">
            <h2 className="section-title">Our Projects</h2>
            <ProjectsFilter filter={filter} onFilterProjects={onFilterProjects}/>
          </div>
          <div className="projects-container">{projects}</div>
        </div>
      </section>
    );
  }
}
