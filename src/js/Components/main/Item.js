import React from 'react';

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.changeMessage = this.props.changeMessage.bind(this);
        this.state = {
            value: this.props.item.value,
        }
    }
    
    changeValue(e) {
        const key = e.key;
        this.props.item.change(key);
        this.setState({
            value: this.props.item.value,
        });
        this.changeMessage(key);
    }

    onChange() {
        return;
    }
    
    render() {
        const classes = ['item'];
        if (this.props.item.active) classes.push('active');
        //const value = this.state.value ? this.state.value : '';
        const value = this.props.item.value ? this.props.item.value : '';
        return (
            <input 
                value={value}
                className={classes.join(' ')}
                onKeyPress={this.changeValue}
                onChange={this.onChange}
                disabled={this.props.item.disabled}
            />
        )
    }
}