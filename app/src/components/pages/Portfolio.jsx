import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPage} from '../../actions/pageActions';
import {pageLoaded} from '../../actions/pageActions';
import classNames from 'classnames';

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
        var first4Projects = originalProjects.slice(0,4);
        var last4Projects = originalProjects.slice((length-4),length);
        
        var projects = last4Projects.concat(originalProjects);
        var projects = projects.concat(first4Projects);
        
        var pageWidth = document.getElementsByTagName('body')["0"].clientWidth - 60;
        var projectWidth = pageWidth / 4;
        
        var containerWidth = (projectWidth * projects.length);

        this.state = {
            originalProjects: originalProjects,
            projects: projects,
            containerStyle: {
                width: containerWidth + "px",
                transform: 'translateX(' + -(projectWidth * (5/2)) + 'px)'
            },
            projectStyle: {
                width: projectWidth + "px",
                height: projectWidth + "px"
            },
            selectedIndex: 4,
            fakeIndex: null
        }

    }
    
    componentDidMount(){
        setTimeout(() => {
            this.props.pageLoaded();
        }, 1500);
        
    }

    selectItem(index, project, e ){
        
        e.preventDefault();

        var that = this;
        var projectWidth = this.state.projectStyle.width;
        var length = projectWidth.length;

        projectWidth = projectWidth.split("");
        projectWidth.splice(length-2, 2);
        projectWidth = projectWidth.join("");
        
        var position = (projectWidth * (index-2) + (projectWidth/2));
        
        var projects = this.state.projects;
        
        var projects_length = this.state.originalProjects.length;
        if(index < 4){
            that.setState({
                fakeIndex: index + 5
            })
        } else if(index > 8){
            that.setState({
                fakeIndex: index - 5
            })
        } else {
            that.setState({
                fakeIndex: null
            })
        }
        
        that.setState({
            containerStyle: {
                transform:  "translateX(-" + position + "px)"
            },
            selectedIndex: index
        })

        if(index < 4){
 
            setTimeout(()=>{
                that.setState({
                    containerStyle: {
                        transform: "translateX(-" + (projectWidth * ((projects_length + index)-2) + (projectWidth/2)) + "px)",
                        transition: "0s"
                    }
                })

            }, 500)

        } 
        if(index > (projects_length + 3)){

            setTimeout(()=>{
                that.setState({
                    containerStyle: {
                        transform: "translateX(-" + ((projectWidth * ((index-projects_length)-2)) + (projectWidth/2)) + "px)",
                        transition: "0s"
                    }
                })

            }, 500)
        }
        
        
    }
    
    
    render(){
        var {containerStyle, projectStyle, projects,selectedIndex} = this.state; 
        var that = this;
        
        var projectList = projects.map(function(project, index){
            
            if(that.state.selectedIndex === index || index === that.state.fakeIndex){
                var projectClass = classNames({
                    'project': true,
                    'project-clicked': true
                })
              
                return (        
                    <div key={index} onClick={that.selectItem.bind(this, index, project)} style={projectStyle} className={projectClass}>
                        <p>{project.name}</p>
                    </div>
                )
            } else {
                var projectClass = classNames({
                    'project': true,
                    'project-clicked': false
                })
                return (        
                    <div key={index} onClick={that.selectItem.bind(this, index, project)} style={projectStyle} className={projectClass}>
                        <p>{project.name}</p>
                    </div>
                )
            }
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