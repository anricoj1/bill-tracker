import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="container">
                <a href="/" className="navbar-brand"><span className="fa fa-building fa-lg"></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li><a href="/">Bill Managment</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;