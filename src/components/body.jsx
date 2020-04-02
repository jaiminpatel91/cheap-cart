import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./home";

export class Body extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path={"/"} exact component={Home} />
                    <Route path={"/index"} component={Home} />
                </div>
            </Router>
        );
    }
}
