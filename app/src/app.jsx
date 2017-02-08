import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'Main';

// Note - Figure out how to do this in webpack
import "!style-loader!css-loader!sass-loader!./stylesheets/main.scss";

ReactDOM.render(
    <Main/>, 
    document.getElementById('app')
);