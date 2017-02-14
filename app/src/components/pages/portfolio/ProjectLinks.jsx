import React from 'react';

export default class ProjectLinks extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        var {selectedProject} = this.props;

        function renderGitLink(){
            if(selectedProject.github){
                return <a href={selectedProject.github} className="github-btn">Source Code</a>
            }
        }
        function renderWebLink(){
            if(selectedProject.website){
                return <a href={selectedProject.website} className="web-btn">View Website</a>
            }
        }
        return(
            <div className="col-3 project-links-container"> 
                <div className="links">
                    {renderGitLink()}
                    {renderWebLink()}
                </div>
            </div>
        )
    }
}