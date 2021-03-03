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
        this.newGame = this.newGame.bind(this);
        
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
        this.game.isHiddenStatistics = true;
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

    showStatistics() {
        this.game.isHiddenStatistics = false;
        this.game.settings.isHidden = true;
        this.updateState(this.game);
    }

    hideStatistics() {
        this.game.isHiddenStatistics = true;
        this.updateState(this.game);
    }

    openFullScreen() {
        this.game.isFullScreen = true;
        this.updateState(this.game);
        const game = document.getElementById('game');
        game.requestFullscreen();
    }

    closeFullScreen() {
        this.game.isFullScreen = false;
        this.updateState(this.game);
        document.exitFullscreen();
    }

    newGame() {
        this.game.startNewGame();
        this.updateState(this.game);
    }

    render() {
        const className = (this.props.className == 'closeFullScreen' && this.game.isFullScreen == false) ? 'fullscreen hidden' : this.props.className;
        return (
            <button className = {className} onClick={this.action}>
                {this.props.text}
            </button>
        )
    }
}