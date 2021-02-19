import React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.action = this.action.bind(this);
    }

    action() {
        this.[this.props.functionName]();
    }
    
    showSettings() {
        document.querySelector('.gameSettings').classList.add('show');
    }

    hideSettings() {
        document.querySelector('.gameSettings').classList.remove('show');
    }
    
    changeTheme() {
        document.querySelector('.wrapper').classList.remove(document.querySelector('.wrapper').classList[1]);
        document.querySelector('.wrapper').classList.add(this.props.className);
    }

    render() {
        return (
            <button className = {this.props.class} onClick={this.action}>
                {this.props.text}
            </button>
        )
    }
}