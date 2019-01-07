import projects from '../data/projects.json';
import Project from './Project';
import React, {Component} from 'react';

class Projects extends Component {
    constructor(description, imgName, title) {
        super(),
        this.state = {
            complete: projects.allProjects
        }
    }
    render() {
        return(
            <div>{
                this.state.complete.map((e) => {
                    return <Project
                    imgName = {e.imgName}
                    title = {e.title}
                    description = {e.description} />
                })}
            </div>
        )
    }
}

export default Projects;
