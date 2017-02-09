import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

// Components
import Main from 'Main';
import Home from 'Home';
import About from 'About';
import Portfolio from 'Portfolio';
import Contact from 'Contact';
// Note - Figure out how to do this in webpack
import "!style-loader!css-loader!sass-loader!./stylesheets/main.scss";

ReactDOM.render(
    <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home} />
                <Route path="about" component={About} />
                <Route path="portfolio" component={Portfolio} />
                <Route path="contact" component={Contact} />
            </Route>
        </Router>, 
    document.getElementById('app')
);