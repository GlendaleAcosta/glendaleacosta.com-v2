import React from 'react';
import Navbar from 'Navbar';

var Main = (props) => {
    return (
        <div className="fullscreen">
            <Navbar/>
            {props.children}
        </div>
    );
}

module.exports = Main;