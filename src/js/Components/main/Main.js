import React from 'react'
import { Field } from './Field'
import '../../../style/main.scss'
import { Message } from './Message'
import { Button } from '../header/Button'
import { Timer } from './Timer'

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
        this.updateMessage = this.updateMessage.bind(this);
        this.updateState = this.props.updateState.bind(this);
    }

    updateMessage (key) {
        this.game.updateMessage(key);
        this.updateState({
            game: this.game
        })
    }

    render() {
        return (
            <div className = 'main' id = 'game'>
                <div className = 'wrapper'>
                    <div className = 'main-game'>
                        <div className = 'game'>
                            <Field game={this.game} updateMessage={this.updateMessage}/>
                        </div>
                        <Button className = 'reset' text = {this.game.translations.menu.resetButton} functionName='resetGame' game = {this.game} updateState={this.updateState}/>
                        <Message game={this.game}/>
                    </div>
                    <div className='main-info'>
                        <Timer game={this.game} updateState={this.updateState}/>
                        <Button className = 'statistics' text = {this.game.translations.menu.statisticsButton} functionName='showStatistics' game = {this.game} updateState={this.updateState}/>
                    </div>
                    <Button className = 'closeFullScreen' text = {this.game.translations.menu.backButton} functionName='closeFullScreen' game = {this.game} updateState={this.updateState}/>
                </div>
            </div>
        )
    }
}