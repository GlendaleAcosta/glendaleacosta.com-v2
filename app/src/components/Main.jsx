import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navbar from 'Navbar';
import PageLoader from 'PageLoader';

class Main extends React.Component {
    constructor(props){
        super(props);
    }

    showpageLoader(){
        if(this.props.page.fetching){
            return(
                <PageLoader/>
            )
        }
    }

    render(){
        return (
            <div className="fullscreen">
                <Navbar/>
                <div className="page">
                    {this.props.children}
                    <ReactCSSTransitionGroup
                        transitionName="pageLoader"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        {this.showpageLoader()}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}



// Redux Config
function mapStateToProps(state){
    return {page: state.page};
}

// function matchDispatchToProps(dispatch){
//     return bindActionCreators({fetchPage: fetchPage}, dispatch);
// }

export default connect(mapStateToProps)(Main);