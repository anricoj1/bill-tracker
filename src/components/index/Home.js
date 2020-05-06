/* react & components */
import React, { Component } from 'react';
import Database from './Database';
import Table from './Table';

/* css */
import '../page.css';



class Home extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
    }

    toggleJason() {
        const divJsn = document.querySelector('#Jason');

        divJsn.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

    toggleAlisha() {
        const divAlisha = document.querySelector('#Alisha');

        divAlisha.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

    render() {    
        return (
            <div className="container homeDiv">
                <h1 className="titleMain text-center">Monthly Bills</h1>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={this.toggleJason}>Go to Jason</button>
                    <button className="btn btn-purple" onClick={this.toggleAlisha}>Go to Alisha</button>
                </div>
                {this.data.map((data, i) => (
                    <div key={i} className="extraSpace">
                        <Table items={new Database(data.table).tables()} name={data.table} />
                    </div>
                ))}
            </div>
        )
    }
}

export default Home;

