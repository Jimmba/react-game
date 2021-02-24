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
        if (this.props.item.disabled) classes.push('disabled');
        if (this.props.item.active) classes.push('active');
        
        return (
            <input 
                value={this.state.value ? this.state.value : ''} 
                className={classes.join(' ')}
                onKeyPress={this.changeValue}
                onChange={this.onChange}
            />
        )
    }
}