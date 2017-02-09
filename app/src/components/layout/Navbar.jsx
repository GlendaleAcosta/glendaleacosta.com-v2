import React from 'react';
// import home_icon from "../../images/home_icon.svg";
// var home_icon = require('../../images/home_icon.svg');

class Navbar extends React.Component{
    constructor(props){
        super(props);
        console.log("navbar component");
    }
    render(){
        return (
            <nav className="navbar">
                <ul className="nav-content">
                    <li className="nav-link"><img className="nav-logo" src="../../images/G_Logo.svg"/></li>                
                </ul>
                <ul className="nav-content">
                    <li className="nav-link"><img className="nav-icon" src="../../images/home_icon.svg"/></li>
                    <li className="nav-link"><img className="nav-icon" src="../../images/ninja_icon.svg"/></li>
                    <li className="nav-link"><img className="nav-icon" src="../../images/portfolio_icon.svg"/></li>
                    <li className="nav-link"><img className="nav-icon" src="../../images/mail_icon.svg"/></li>
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