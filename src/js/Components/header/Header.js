import React from 'react';
import { Button } from './Button';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
        this.updateState = this.props.updateState.bind(this);
    }

    render() {
        return (
            <header>
                <h1>{this.game.translations.menu.gameName}</h1>
                <Button className = 'settings' text = {this.game.translations.menu.settingsButton} functionName='showSettings' game = {this.game} updateState={this.updateState}/>
            </header>
        )
    }
}