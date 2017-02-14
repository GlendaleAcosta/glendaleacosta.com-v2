import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPage} from '../../../actions/pageActions';
import {pageLoaded} from '../../../actions/pageActions';
import classNames from 'classnames';
import ProjectDetails from 'ProjectDetails';

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.selectItem = this.selectItem.bind(this);
        var originalProjects = [
                {
                    name: 'Angular Movie Watchlist',
                    technologies: ['Angularjs', 'Node', 'PostgresQL', 'TMDB REST API', 'JWT'],
                    details: 'A fun movie app. Involves login, sign-up, authentication, dynamic routing, route protection, password encryption, and more. You can also save your favorite movies and add movies to your own watchlist for later.'
                },
                {
                    name: 'Vending Machine App',
                    technologies: ['Angularjs', 'PHP', 'MYSQL'],
                    details: "A small app. You can select and buy drinks. There's also a save functionality to keep the history if purchased items."
                },
                {
                    name: 'Pokémon Iphone App',
                    technologies: ['Swift', 'REST Pokéapi'],
                    details: 'Utilizes REST and API from the popular game, pokemon. It contains a search functionality, displays all pokemon , and utilizes dynamic pages showing details for each individual pokemon.'
                },
                {
                    name: 'A & K Roofing',
                    technologies: ['Wordpress', 'HTML' ,'CSS', ],
                    details: 'A real commercial website to demonstrate abilities with wordpress and simple UI.'
                },
                {
                    name: 'glendaleacosta.com-v1',
                    technologies: ['HTML', 'Post-CSS', 'JavaScript', 'Gulp'],
                    details: 'My first real website. It contained fancy frontend tricks like parallax. It heavily relied on gulp to minify files and utilize post-css.'
                },
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
            selectedProject: originalProjects[0]
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
        
        this.setState({
            containerStyle: {
                transform:  "translateX(-" + position + "px)"
            },
            selectedIndex: index,
            selectedProject: project
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
                        <p className="project-title">{project.name}</p>
                    </div>
                )
            } else {
                var projectClass = classNames({
                    'project': true,
                    'project-clicked': false
                })
                return (        
                    <div key={index} onClick={that.selectItem.bind(this, index, project)} style={projectStyle} className={projectClass}>
                        <p className="project-title">{project.name}</p>
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
                <div className="row-4 portfolio-bottom">
                    <div className="col-3">

                    </div>
                    
                    <ProjectDetails selectedProject={this.state.selectedProject}/>
                    
                </div>
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