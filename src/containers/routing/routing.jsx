import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from '../header/header';

import Home from '../test/home';
import About from '../test/about';
import Topics from '../test/topics';

const baseRoute = "/reactt/build";

class Routing extends Component{

    render(){
        
        const Topics1 = ({ match }) => (
            <div>
                <Router>
                <div>
                    <ul>
                        <li><Link to={`${match.url}/header`}>Header</Link></li>
                        <li><Link to={`${match.url}/about`}>Home</Link></li>
                        <li><Link to={`${match.url}/topics`}>Topics</Link></li>
                    </ul>
                    <Route path={`${match.url}/header`} component={Header} />
                    <Route path={`${match.url}/about`} component={Home} />
                    <Route path={`${match.url}/topics`} component={Topics} />
                    <Route exact path={`${match.url}`} render={() => (
                    <h3>Please select a topic.</h3>
                    )}/>
                </div>
                </Router>
            </div>
        );

        return (
            <Router>
                <div>
                <ul>
                    <li><Link to={`${baseRoute}/`} >Home</Link></li>
                    <li><Link to={`${baseRoute}/about`} >About</Link></li>
                    <li><Link to={`${baseRoute}/topics`} >Topics</Link></li>
                </ul>
                <Route exact path={`${baseRoute}/`} component={Home} />
                <Route path={`${baseRoute}/about`} component={About} />
                <Route path={`${baseRoute}/topics`} component={Topics1} />
                </div>
            </Router>
        );
    }
}

export default Routing;