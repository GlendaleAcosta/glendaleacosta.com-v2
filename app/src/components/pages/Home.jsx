import React from 'react';
import {default as Video, Play, Mute, Seek, Fullscreen, Time, Overlay} from 'react-html5video';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPage} from '../../actions/pageActions';
import {pageLoaded} from '../../actions/pageActions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends React.Component {
    constructor(props){
        super(props);
        console.log("loaded Home component");

    }

    componentDidMount(){
        
        setTimeout(() => {
            this.props.pageLoaded();
        }, 1500);
        
    }

    render(){
        return (
            <div className="hero page-shadow"> 
                <h1 className="lg-txt-1 white">GLENDALE ACOSTA</h1>

                <hr className="divider"/>
                <p className="lg-txt-4 mgn-1 white-ish">A normal college student by day, and a vigilante hacker by night</p>
                <Link className="btn mgn-2" to="/portfolio">View Portfolio</Link>

                <Video id="bgVideo" autoPlay loop muted
                    poster="http://sourceposter.jpg">
                <source src="../../videos/Maxine the Fluffy Corgi.mp4" type="video/mp4" />
                </Video>
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

export default connect(mapStateToProps , matchDispatchToProps)(Home);
