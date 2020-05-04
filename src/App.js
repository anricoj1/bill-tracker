/* react && components */
import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/index/Home';

/* css */
import './components/page.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                    <Nav />
                </div>
                <div className="container-fluid homeDiv">
                    <Home />
                </div>
            </div>
        )
    }
}

export default App;