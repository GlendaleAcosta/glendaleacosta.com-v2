import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPage} from '../../actions/pageActions';
import {pageLoaded} from '../../actions/pageActions';

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.selectItem = this.selectItem.bind(this);
        var originalProjects = [
                {name: 'website 1'},
                {name: 'website 2'},
                {name: 'website 3'},
                {name: 'website 4'},
                {name: 'website 5'}
            ];

        var length = originalProjects.length;
        var first3Projects = originalProjects.slice(0,3);
        var last3Projects = originalProjects.slice((length-3),length);
        
        var projects = last3Projects.concat(originalProjects);
        var projects = projects.concat(first3Projects);
        
        var pageWidth = document.getElementsByTagName('body')["0"].clientWidth - 60;
        var projectWidth = pageWidth / 4;
        
        var containerWidth = (projectWidth * projects.length);

        this.state = {
            projects: projects,
            containerStyle: {
                width: containerWidth + "px",
                transform: 'translateX(' + -(projectWidth/2) + 'px)'
            },
            projectStyle: {
                width: projectWidth + "px",
                height: projectWidth + "px",
            }
        }

    }
    
    componentDidMount(){
        
    }

    selectItem(index, project, e ){
        e.preventDefault();
        console.log(index);
        var that = this;
    //     var projects = this.state.projects;
        var projectWidth = this.state.projectStyle.width;
        var length = projectWidth.length;

        projectWidth = projectWidth.split("");
        projectWidth.splice(length-2, 2);
        projectWidth = projectWidth.join("");
        
        var position = (projectWidth * (index-2) + (projectWidth/2));
        console.log(projectWidth);
        console.log(position - projectWidth);
        
        that.setState({
            containerStyle: {
                transform:  "translateX(-" + position + "px)"
            }
        })
        
    }
    
    
    render(){
        var {containerStyle, projectStyle, projects} = this.state; 
        var that = this;
        var projectList = projects.map(function(project, index){
            return (        
                <div key={index} onClick={that.selectItem.bind(this, index, project)} style={projectStyle} className="project">
                    <p>{project.name}</p>
                </div>
            )
        })
        
        return (
            <div className="container flex-column">
                <div className="row-8 portfolio-top">
                    <div style={containerStyle} className="project-container">
                        {projectList}
                    </div>
                </div>
                <div className="row-4 portfolio-bottom"><h1 className="lg-txt-1">Portfolio</h1></div>
            </div>
        );
    }
}


// Redux Config
function mapStateToProps(state){
    return {page: state.page};
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchPage: fetchPage,
        pageLoaded: pageLoaded
    }, dispatch);
}

export default connect(mapStateToProps , matchDispatchToProps)(Portfolio);