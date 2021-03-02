import React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.action = this.action.bind(this);
        this.game = this.props.game;
        this.init();
    }

    init () {
        this.showSettings = this.showSettings.bind(this);
        this.hideSettings = this.hideSettings.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        
        if (this.props.updateState) {
            this.updateState = this.props.updateState.bind(this);
        }
    }

    action() {
        this.[this.props.functionName]();
        this.game.sounds.playClick();
    }
    
    showSettings() {
        this.game.settings.isHidden = false;
        this.updateState(this.game);
    }

    hideSettings() {
        this.game.settings.isHidden = true;
        this.updateState(this.game);
    }
    
    changeTheme() {
        this.game.settings.activeTheme = this.props.className;
        this.updateState(this.game);
    }

    resetGame() {
        this.game.resetGame();
        this.updateState(this.game);
    }

    render() {
        return (
            <button className = {this.props.className} onClick={this.action}>
                {this.props.text}
            </button>
        )
    }
}