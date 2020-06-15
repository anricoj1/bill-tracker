/* react & components */
import React, { Component } from 'react';
import Summary from './table/Summary';


/* css */
import './App.css';


class Sheet extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.data = props.data;
    }
    
    render() {    
        return (
            <div className="container homeDiv">
                <h1 className="titleMain text-center">Monthly Bills</h1>
                <Summary name="Summary" data={this.data} />
                <p onClick={console.log(this.data[0].getTitle())}>Hello</p>
            </div>
        )
    }
}

export default Sheet;

