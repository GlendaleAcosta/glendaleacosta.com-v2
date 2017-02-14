import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPage} from '../../../actions/pageActions';
import {pageLoaded} from '../../../actions/pageActions';
import classNames from 'classnames';
import ProjectDetails from 'ProjectDetails';
import ProjectLinks from 'ProjectLinks';
import ProjectCounter from 'ProjectCounter';
import ProjectSlider from 'ProjectSlider';

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.handleItemSelect = this.handleItemSelect.bind(this);
        var originalProjects = [
                {
                    name: 'Angular Movie Watchlist',
                    technologies: ['Angularjs', 'Node', 'PostgresQL', 'TMDB REST API', 'JWT'],
                    details: 'A fun movie app. Involves login, sign-up, authentication, dynamic routing, route protection, password encryption, and more. You can also save your favorite movies and add movies to your own watchlist for later.',
                    github: 'https://github.com/GlendaleAcosta/angular-movie-watchlist',
                    website: 'https://gentle-crag-19149.herokuapp.com/'
                },
                {
                    name: 'Vending Machine App',
                    technologies: ['Angularjs', 'PHP', 'MYSQL'],
                    details: "A small app. You can select and buy drinks. There's also a save functionality to keep the history if purchased items.",
                    github: 'https://github.com/GlendaleAcosta/Vending-Machine-App',
                    website: 'https://infinite-fjord-58963.herokuapp.com/'

                },
                {
                    name: 'Pokémon Iphone App',
                    technologies: ['Swift', 'REST Pokéapi'],
                    details: 'Utilizes REST and API from the popular game, pokemon. It contains a search functionality, displays all pokemon , and utilizes dynamic pages showing details for each individual pokemon.',
                    github: 'https://github.com/GlendaleAcosta/Pokedex',
                    website: null
                },
                {
                    name: 'A & K Roofing',
                    technologies: ['Wordpress', 'HTML' ,'CSS', ],
                    details: 'A real commercial website to demonstrate abilities with wordpress and simple UI.',
                    github: null,
                    website: 'http://www.ankroofing.com/'
                },
                {
                    name: 'glendaleacosta.com-v1',
                    technologies: ['HTML', 'Post-CSS', 'JavaScript', 'Gulp'],
                    details: 'My first real website. It contained fancy frontend tricks like parallax. It heavily relied on gulp to minify files and utilize post-css.',
                    github: 'https://github.com/GlendaleAcosta/glendaleacosta.com-v2',
                    website: 'http://www.glendaleacosta.com/'
                },
            ];

        var length = originalProjects.length;
        var first4Projects = originalProjects.slice(0,4);
        var last4Projects = originalProjects.slice((length-4),length);
        
        var projects = last4Projects.concat(originalProjects);
        var projects = projects.concat(first4Projects);
        
        var pageWidth = document.getElementsByTagName('html')["0"].clientWidth;
        var projectWidth;
        var translateX;

        if(pageWidth < 769){
            projectWidth = pageWidth / (5/4);
            translateX = ((projectWidth/8) - (projectWidth * 4));
        } else {
            pageWidth = pageWidth - 60;
            projectWidth = pageWidth / 4;
            translateX = (projectWidth/2) - (projectWidth * 3);
        }
       
        var containerWidth = (projectWidth * projects.length);
        
        this.state = {
            originalProjects: originalProjects,
            projects: projects,
            containerStyle: {
                width: containerWidth + "px",
                transform: 'translateX(' + translateX + 'px)'
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

    handleItemSelect(index, project){
        console.log(index);
        var that = this;
        var projectWidth = this.state.projectStyle.width;
        var length = projectWidth.length;

        projectWidth = projectWidth.split("");
        projectWidth.splice(length-2, 2);
        projectWidth = projectWidth.join("");
        
        var pageWidth = document.getElementsByTagName('html')["0"].clientWidth;
        
        var quarterWidth;
        var halfWidth;
         if(pageWidth < 769){
            quarterWidth = (projectWidth/8);
        } else {
            halfWidth = (projectWidth/2);
        }
        
        var position = quarterWidth - (projectWidth * index) || halfWidth - (projectWidth * (index-1));  
        
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
                transform:  "translateX(" + position + "px)"
            },
            selectedIndex: index,
            selectedProject: project
        })

        if(index < 4){
            var translateX;
            if(quarterWidth){ translateX = (quarterWidth) - (projectWidth * (projects_length + index)) }
            if(halfWidth) { translateX = (halfWidth) - (projectWidth * (projects_length + (index - 1)))}
  
            setTimeout(()=>{
                that.setState({
                    containerStyle: {
                        transform: "translateX(" + translateX + "px)",
                        transition: "0s"
                    }
                })

            }, 500)

        } 
        if(index > (projects_length + 3)){
            var translateX;
            if(quarterWidth) {translateX = (quarterWidth) - (projectWidth * (index - projects_length))}
            if(halfWidth) { translateX = (halfWidth) - (projectWidth * ((index - 1) - projects_length))}
            
            setTimeout(()=>{
                that.setState({
                    containerStyle: {
                        transform: "translateX(" + translateX + "px)",
                        transition: "0s"
                    }
                })

            }, 500)
        }
        
        
    }
    
    
    render(){
        var that = this;
        var {   containerStyle, projectStyle, projects ,
                selectedIndex, fakeIndex, selectedProject, originalProjects } = this.state; 
        
        return (
            <div className="portfolio-top-container">
                <div className="row-8 portfolio-top">
                        <ProjectSlider 
                            projects={projects} 
                            selectedIndex={selectedIndex}
                            fakeIndex={fakeIndex}
                            projectStyle={projectStyle}
                            containerStyle={containerStyle}
                            onItemSelect={this.handleItemSelect}
                        />
                </div>
                <div className="row-4 portfolio-bottom">
                    <ProjectCounter 
                        selectedIndex={selectedIndex}
                        originalProjects={originalProjects}
                        selectedProject={selectedProject}/>
                    <ProjectDetails selectedProject={selectedProject} />
                    <ProjectLinks selectedProject={selectedProject} />
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