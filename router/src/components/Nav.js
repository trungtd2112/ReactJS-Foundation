import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Nav extends Component {

    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="/">Start Bootstrap</a>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link js-scroll-trigger">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/tin" className="nav-link js-scroll-trigger">News</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/tin-chi-tiet" className="nav-link js-scroll-trigger">Details</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/lien-he" className="nav-link js-scroll-trigger">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;