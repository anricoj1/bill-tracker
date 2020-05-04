/* react & components */
import React, { Component } from 'react';
import Database from './Database';
import Table from './Table';

/* css */
import '../page.css';


class Home extends Component {
    scrollJason() {
        const tableJason = document.getElementById('j');
        console.log(tableJason);;
    }
    render() {    
        return (
            <div className="container homeDiv">
                <h1 className="titleMain text-center">Monthly Bills</h1>
                <div className="text-center">
                    <button onClick={this.scrollJason()} id="btn-jason" className="btn btn-primary">Go to Jason</button>
                    <button id="btn-alisha" className="btn btn-purple">Go to Alisha</button>
                </div>
                <div>
                    <Table items={new Database('Shared Bills').tables()} name="Shared Bills" />
                </div>
                <div className="extraSpace">
                    <Table items={new Database('Jason').tables()} name="Jason" />
                </div>
                <div className="extraSpace lastTable">
                    <Table items={new Database('Alisha').tables()} name="Alisha" />
                </div>
            </div>
        )
    }
}

export default Home;

