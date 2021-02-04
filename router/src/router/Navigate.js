import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Contact from '../components/Contact';
import Details from '../components/Details';
import Home from '../components/Home';
import News from '../components/News';

class Navigate extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/tin" component={News} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tin-chi-tiet/:slug.:id.html" component={Details} />
                    <Route exact path="/lien-he" component={Contact} />
                </Switch>
            </div>
        );
    }
}

export default Navigate;