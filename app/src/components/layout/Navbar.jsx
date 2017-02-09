import React from 'react';
import { Link, Indexlink } from 'react-router';
// import home_icon from "../../images/home_icon.svg";
// var home_icon = require('../../images/home_icon.svg');

class Navbar extends React.Component{
    constructor(props){
        super(props);
        console.log("Loaded navbar component");
    }
    render(){
        return (
            <nav className="navbar">
                <ul className="nav-content">
                    <li className="nav-link"><h1 className="nav-logo">G</h1></li>                
                </ul>
                <ul className="nav-content">
                    <li className="nav-link">
                        <Link to="/">
                            <img className="nav-icon" src="../../images/home_icon.svg"/>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/about">
                            <img className="nav-icon" src="../../images/ninja_icon.svg"/>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/portfolio">
                            <img className="nav-icon" src="../../images/portfolio_icon.svg"/>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/contact">
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

module.exports = Navbar;