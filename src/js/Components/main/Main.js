import React from 'react';
import Game from '../../data/Game'
import { Field } from './Field'
import '../../../style/main.scss'
import { Message } from './Message'
import { messages } from '../../data/data';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage (key) {
        this.game.updateMessage(key);
        this.setState({
            game: this.game
        });
    }

    render() {
        return (
            <div className = 'main'>
                <div className = 'game'>
                    <Field game={this.game} updateMessage={this.updateMessage}/>
                    <Message game={this.game}/>
                </div>
            </div>
        )
    }
}