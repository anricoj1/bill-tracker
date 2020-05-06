/* react && components */
import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/index/Home';


/* css */
import './components/page.css';


/* import Data */
import Database from './components/index/Database';

const db = [new Database('Shared Bills'), new Database('Jason'), new Database('Alisha')];


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                    <Nav />
                </div>
                <div className="container-fluid homeDiv">
                    <Home data={db}/>
                </div>
            </div>
        )
    }
}

export default App;