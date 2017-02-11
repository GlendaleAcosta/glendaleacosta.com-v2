import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Indexlink} from 'react-router';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPage} from '../../actions/pageActions';
import {pageLoaded} from '../../actions/pageActions';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        console.log("Loaded navbar component");
    }
    
    changePage(link){
        event.preventDefault();
        var location = browserHistory.getCurrentLocation();

        if (location.pathname !== link){
            this.props.fetchPage(); 
            setTimeout(()=>{
                browserHistory.push(link);
            },500)
        }
    }

        
    render(){        
        
        return (
            <nav className="navbar">
                <ul className="nav-content">
                    <li className="nav-link">
                        <Link className="nav-link" to="/">
                            <h1 className="nav-logo">G</h1>
                        </Link>
                    </li>                
                </ul>
                <ul className="nav-content">
                    <li onClick={()=> this.changePage('/')} className="nav-link">
                        <Link>
                            <img className="nav-icon" src="../../images/home_icon.svg"/>
                        </Link>
                    </li>
                    <li onClick={()=> this.changePage('/about')}  className="nav-link">
                        <Link>
                            <img className="nav-icon" src="../../images/ninja_icon.svg"/>
                        </Link>
                    </li>
                    <li onClick={()=> this.changePage('/portfolio')}  className="nav-link">
                        <Link>
                            <img className="nav-icon" src="../../images/portfolio_icon.svg"/>
                        </Link>
                    </li>
                    <li onClick={()=> this.changePage('/contact')}  className="nav-link">
                        <Link>
                            <img className="nav-icon" src="../../images/mail_icon.svg"/>
                        </Link>
                    </li>
                </ul>
                <ul className="nav-content">
                    <li className="nav-link"><img className="nav-social" src="../../images/facebook_icon.svg"/></li>
                    <li className="nav-link"><img className="nav-social" src="../../images/twitter_icon.svg"/></li>
                    <li className="nav-link"><img className="nav-social" src="../../images/linkedin_icon.svg"/></li>
                    <li className="nav-link"><img className="nav-social" src="../../images/github_icon.svg"/></li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return {page: state.page};
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchPage: fetchPage        
    }, dispatch);
}

export default connect(mapStateToProps , matchDispatchToProps)(Navbar);