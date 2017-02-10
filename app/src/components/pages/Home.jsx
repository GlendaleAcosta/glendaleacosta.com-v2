import React from 'react';
import {default as Video, Play, Mute, Seek, Fullscreen, Time, Overlay} from 'react-html5video';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {increment} from '../../actions/pageLoadActions';


class Home extends React.Component {
    constructor(props){
        super(props);
        console.log("loaded Home component");
    }

    componentWillUnmount(){
        console.log("Home Component is being unmounted (loading animation should start here)");
    }
    render(){
        return (
            <div className="page page-shadow"> 
                <h1 className="lg-txt-1 white">GLENDALE ACOSTA</h1>
                <hr className="divider"/>
                <p className="lg-txt-3 mgn-1 white">A normal college student by day, and a vigilante hacker by night</p>
                <Link className="btn mgn-2" to="/portfolio">View Portfolio</Link>

                <Video id="bgVideo" autoPlay loop muted
                poster="http://sourceposter.jpg"
                onCanPlayThrough={() => {
                    // Do stuff 
                }}>
                <source src="../../videos/AxiomMeeting.mp4" type="video/mp4" />
                </Video>
            </div>
        );
    }
}

// Redux Config
function mapStateToProps(state){
    return {pageLoad: state.pageLoad};
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({increment: increment}, dispatch);
}

export default connect(mapStateToProps , matchDispatchToProps)(Home);