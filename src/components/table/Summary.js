import React, { Component } from 'react';

import '../App.css';

class Summary extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.data = props.data;
    }
    render() {
        return (
            <table id={this.name} className="custom-table">
                <tbody>
                    <tr>
                        <th colSpan="3">{this.name}</th>
                    </tr>
                    {this.data.map((data, i) => (
                        <tr key={i}>
                            <td>{data.title}</td>
                            <td>{data.date}</td>
                            <td>${data.cost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Summary;