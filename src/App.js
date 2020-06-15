/* react && components */
import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Sheet from './components/Sheet';


/* css */
import './components/App.css';


/* import Data */
import Database from './components/data/Database';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                    <Nav />
                </div>
                <div className="container-fluid homeDiv">
                    <Sheet name="Jason" data={new Database().getCombined()} />
                </div>
            </div>
        )
    }
}

export default App;