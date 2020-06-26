import React, { Component } from "react";
import { getProjects } from "../../projects/projects";
import { Button } from 'react-bootstrap';

class Portfolio extends Component {
  state = {
      projects: getProjects()
  };

  render() {


    return (
      <React.Fragment>
        
        <table className="table ml-3 text-muted">
          <thead>
            <tr>
  
              <th>Title + Link</th>
              <th>Description</th>
              <th>Technology</th>
              <th>Challenges</th>
              <th>Accomplishments</th>
            </tr>
          </thead>
          <tbody>
            {this.state.projects.map((project) => (
              <tr key={project._id}>
     
                <td><Button href={project.url} variant="link">{project.title}</Button></td>
                <td>{project.description}</td>
                <td>{project.technology}</td>
                <td>{project.challenges}</td>
                <td>{project.accomplishments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Portfolio;
