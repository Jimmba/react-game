import React from 'react';

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.changeMessage = this.props.changeMessage.bind(this);
        this.game = this.props.game;
        this.state = {
            value: this.props.item.value,
        }
        this.playSound = this.playSound.bind(this);
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

    playSound(isDisabled) {
        if (isDisabled) {
            this.game.sounds.playMistake();
        } else {
            this.game.sounds.playClick();
        }

        if (!this.game.settings.currentGame.isStarted) {
            this.game.startGame();
        }
    }
    
    render() {
        const classes = ['item'];
        if (this.props.item.active) classes.push('active');
        const value = this.props.item.value ? this.props.item.value : '';
        const isDisabled = this.props.item.disabled == true ? true : false ;
        return (
            <input 
                value={value}
                className={classes.join(' ')}
                onKeyPress={this.changeValue}
                onChange={this.onChange}
                disabled={isDisabled}
                onClick={() => this.playSound(isDisabled)}
            />
        )
    }
}