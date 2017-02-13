import React from 'react';

export default class ProjectDetails extends React.Component{
    constructor(props){
        super(props);
    
    }

    render(){
        var {selectedProject} = this.props;
        var technologies = selectedProject.technologies.map(function(technology, index){
            return (
                <li key={index}>{technology}</li>
            )
        })
        
        return(
            <div className="col-6"> 
                <h1 className="details-title">{selectedProject.name}</h1>
                <ul className="tech-list">
                    {technologies}
                </ul>
                <p className="project-details">{selectedProject.details}</p>
            </div>
        )
    }
}