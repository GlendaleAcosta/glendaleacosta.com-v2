import React from 'react';


var Navbar = (props) => {
    return (
        <nav className="navbar">
            <ul className="nav-content">
                <li className="nav-link">Logo</li>                
            </ul>
            <ul className="nav-content">
                <li className="nav-link">Home</li>
                <li className="nav-link">About</li>
                <li className="nav-link">Portfolio</li>
                <li className="nav-link">Contact</li>
            </ul>
            <ul className="nav-content">
                <li className="nav-link">FB</li>
                <li className="nav-link">Twitter</li>
                <li className="nav-link">Linkedin</li>
                <li className="nav-link">Github</li>
            </ul>
        </nav>
    );
}

module.exports = Navbar;