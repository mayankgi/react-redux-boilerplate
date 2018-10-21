import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configure} from 'store/configure.store';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

let store = configure();



const Lorem = () => (
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
)

const Welcome = () => (
    <div>
        Welcome
        <Link to="/lorem"> Lorem!</Link>
        
        <Route path="/lorem" component = {Lorem} />
    </div>
)

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <Welcome />
        </Router>
    </Provider>,
    document.getElementById('app')
);

