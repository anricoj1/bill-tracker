import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }

    toggleDiv(name) {
        return console.log();
    }
    
    render() {
        return (
            <button id={'btn-' + this.name} className='btn' onClick={this.toggleDiv}>Go to {this.name}</button> 
        )
    }
}

export default Button;