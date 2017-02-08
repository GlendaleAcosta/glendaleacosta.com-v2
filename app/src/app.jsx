import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

// Components
import Main from 'Main';
import Home from 'Home';

// Note - Figure out how to do this in webpack
import "!style-loader!css-loader!sass-loader!./stylesheets/main.scss";

ReactDOM.render(
    <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home} />
            </Route>
        </Router>, 
    document.getElementById('app')
);