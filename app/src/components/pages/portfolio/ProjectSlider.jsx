import React from 'react';
import classNames from 'classnames';

export default class ProjectList extends React.Component{
    constructor(props){
        super(props);
        
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
            projectStyle = {...projectStyle, backgroundImage: "url('" + project.image + "')"};
            
            if(selectedIndex === index || index === fakeIndex){
                var projectClass = classNames({ 'project': true, 'project-clicked': true })
                return (        
                    <div 
                        onClick={that.onBtnClick.bind(this, index, project)} 
                        key={index} 
                        style={projectStyle} 
                        className={projectClass}
                    >
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