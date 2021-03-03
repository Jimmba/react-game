import React from 'react'
import { formatTime, translations } from '../../data/data';

export class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
        this.state = {
            timer: this.game.settings.currentGame.now - this.game.settings.currentGame.startGame
        }
    }


    componentDidMount() {
        this.game.settings.currentGame.timer = setInterval(() => {
            if (this.game.settings.currentGame.isStarted) {
                this.game.settings.currentGame.now = Date.now();
                this.game.saveGame();
                const timer = this.game.settings.currentGame.now - this.game.settings.currentGame.startGame
                this.setState({
                    timer: timer
                });
            } else {
                if (this.game.settings.currentGame.isReset) {
                    this.setState({
                        timer: 0
                    })
                }
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.game.settings.currentGame.timer);
    }

    render() {
        // debugger;
        let value = this.state.timer;
        if (!this.game.settings.currentGame.isStarted && this.game.settings.currentGame.isReset) value = 0;
        // console.log(this.game.settings.currentGame.isStarted, this.game.settings.currentGame.isReset, value);
        // console.log(value);
        return (
            <div className = 'main-info--timer'>
                <h2>{translations[this.game.settings.lang].menu.timerTitle}</h2>
                <div className='time'>{formatTime(value)}</div>
            </div>
        )
    }
}