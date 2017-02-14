import React from 'react';
import classNames from 'classnames';

export default class ProjectList extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick(index, project, e){
        e.preventDefault();
        this.props.onItemSelect(index, project);
        
    }

    render(){
        var {containerStyle,projects, selectedIndex, fakeIndex, projectStyle} = this.props;
        var that = this;
        
        var projectList = projects.map(function(project, index){
            console.log("here");
            
            if(selectedIndex === index || index === fakeIndex){
                var projectClass = classNames({ 'project': true, 'project-clicked': true })
              
                return (        
                    <div 
                        onClick={that.onBtnClick.bind(this, index, project)} 
                        key={index} 
                        style={projectStyle} 
                        className={projectClass}
                    >
                        <p className="project-title">{project.name}</p>
                    </div>
                )
            } else {
                var projectClass = classNames({ 'project': true, 'project-clicked': false })
                return (        
                    <div 
                        onClick={that.onBtnClick.bind(this, index, project)} 
                        key={index} 
                        style={projectStyle} 
                        className={projectClass}
                    >
                        <p className="project-title">{project.name}</p>
                    </div>
                )
            }
        });
        
        return(
            <div style={containerStyle} className="project-container">
                {projectList}
            </div>
        )
    }
}