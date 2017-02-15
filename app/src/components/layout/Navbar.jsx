import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Indexlink} from 'react-router';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPage} from '../../actions/pageActions';
import {pageLoaded} from '../../actions/pageActions';
import classNames from 'classnames';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            openNavbar: null
        }
    }
    
    toggleNav(e){
        e.preventDefault();

        if (!this.state.openNavbar){
            this.setState({
                openNavbar: { 
                    height: '100vh',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                navContentStyle: {display: 'block'}
            })
        } else {
            this.setState({
                openNavbar: null,
                navContentStyle: {display: 'none'}
            })
        }
    }
    changePage(link){
        event.preventDefault();
        var that = this;
        if(this.state.openNavbar) {
            setTimeout(()=>{
                that.setState({
                    openNavbar: null,
                    navContentStyle: {display: 'none'}
                })
            }, 500)
        }
        var location = browserHistory.getCurrentLocation();

        if (location.pathname !== link){
            this.props.fetchPage(); 
            setTimeout(()=>{
                browserHistory.push(link);
            },500)
        }
    }

        
    render(){        
        var { openNavbar, navContentStyle } = this.state;
        var hamburgerClass = classNames({
            'hamburger': true,
            'hamburger-x': this.state.openNavbar 
        })
        return (
            <nav style={openNavbar} className="navbar">
                <ul style={navContentStyle} className="nav-content">
                    <li onClick={()=> this.changePage('/')} className="nav-link">
                        <Link className="nav-logo">
                            G
                        </Link>
                    </li>                
                </ul>
                <ul style={navContentStyle} className="nav-content">
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
                <ul style={navContentStyle} className="nav-content">
                    <li className="nav-link">
                        <a href='#'><img className="nav-social" src="../../images/facebook_icon.svg"/></a>
                    </li>
                    <li className="nav-link">
                        <a href='#'><img className="nav-social" src="../../images/twitter_icon2.svg"/></a>
                    </li>
                    <li className="nav-link">
                        <a href='https://www.linkedin.com/in/glendale-acosta-608b88116/'><img className="nav-social" src="../../images/linkedin_icon.svg"/></a>
                    </li>

                    <li className="nav-link">
                         <a href='https://github.com/glendaleacosta'><img className="nav-social" src="../../images/github_icon3.svg"/></a>
                    </li>
                </ul>
                <div onClick={this.toggleNav} className={hamburgerClass}>
                    <div className="hamburger-mid"></div>
                </div>
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