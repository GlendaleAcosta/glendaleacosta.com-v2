import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPage} from '../../../actions/pageActions';
import {pageLoaded} from '../../../actions/pageActions';
import Skills from 'Skills';

class About extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
        setTimeout(() => {
            this.props.pageLoaded();
        }, 1500);
        
    }

    render(){
        return (
            <div className="container">
                <div className="col-6 center-content flex-column">
                    <div className="col-9 about-container">

                        
                        <h1 className="about-title">Hi, I'm Glendale Acosta</h1>
                        <p className="about-details">
                            I'm currently a student in college and avidly looking for a job. Here's a brief rundown of my experience.
                        </p>
                        <ul className="about-exp ">
                            <li>Web Development Intern At Business Optimizers Inc.</li>
                            <li>President of the Developers Club at my College</li>
                            <li>Developed commercial website for restaurant</li>
                            <li>Developed commercial website for roofing company</li>
                            <li>Developed tons of projects on github</li>
                        </ul>
                        <p className="about-details">
                            My latest projects on github (including this website) are a good overview of where my skills are at.
                        </p>
                        
                    </div>
                    
                </div>
                <div className="col-6 center-content flex-column skills-container">
                    <Skills />
                    <div className="rectangle"></div>
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

export default connect(mapStateToProps , matchDispatchToProps)(About);