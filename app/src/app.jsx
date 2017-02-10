import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Components
import Main from 'Main';
import Home from 'Home';
import About from 'About';
import Portfolio from 'Portfolio';
import Contact from 'Contact';

// Reducers
import reducer from './reducers/index';

// Note - Figure out how to do this in webpack
import "!style-loader!css-loader!sass-loader!./stylesheets/main.scss";

// Initialize Store
let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home} />
                <Route path="about" component={About} />
                <Route path="portfolio" component={Portfolio} />
                <Route path="contact" component={Contact} />
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('app')
);