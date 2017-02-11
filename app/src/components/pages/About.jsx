import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPage} from '../../actions/pageActions';
import {pageLoaded} from '../../actions/pageActions';

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
            <div className="page">
                <h1 className="lg-txt-1">About Me</h1>
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