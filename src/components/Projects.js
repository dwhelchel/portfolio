import React, { Component } from 'react';
import Card from './Card';
import '../css/Projects.css';

class Projects extends Component {
    render() {
        return(
            <div className="projects" id="projects">
                <div className="projects-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}

export default Projects;