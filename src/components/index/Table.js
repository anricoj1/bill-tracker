import React, { Component } from 'react';


class Table extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.items = this.props.items;
    }

    render() {
        return (
            <table id={this.name} className="custom-table">
                <tbody>
                    <tr>
                        <th colSpan="2">{this.name}</th>
                    </tr>
                    {this.items.map((data, i) => (
                        <tr key={i}>
                            <td>{data.date}</td>
                            <td>${data.cost}.00</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Table;