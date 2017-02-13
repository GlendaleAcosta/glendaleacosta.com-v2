import React from 'react';

export default class ProjectDetails extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            selectedProject: this.props.selectedProject
        }
    }

    render(){
        var {selectedProject} = this.state;
        return(
            <div className="col-6"> 
                <h1 className="details-title">{selectedProject.name}</h1>
                <ul className="tech-list">
                    <li>Angularjs</li>
                    <li>Node</li>
                    <li>PostgresQL</li>
                    <li>TMDB REST API</li>
                    <li>JWT</li>
                </ul>
                <p className="project-details">{selectedProject.details}</p>
            </div>
        )
    }
}