import React from 'react';
import { Button } from '../header/Button';
import { Sound } from '../main/Sound';
import { ColorsButtons } from './ColorsButtons';
import { Languages } from './Languages';
import { Levels } from './Levels';

export class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
        this.updateState = this.props.updateState.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
        this.changeLevel = this.changeLevel.bind(this);
        this.state = {
            game: this.props.game
        }
    }

    changeLanguage(e) {
        this.game.selectLanguage(e.target.value);
        this.updateState(this.game);
    }

    changeLevel(e) {
        this.game.selectLevel(e.target.value);
        this.updateState(this.game);
    }

    render() {
        const className = this.props.game.settings.isHidden ? 'gameSettings' : 'gameSettings show';
        this.translations = this.game.translations;
        return (
            <div className = {className}>
                <div className = 'gameSettings-item'>
                    <Button className='close' text = {this.translations.menu.closeButton} functionName='hideSettings' game={this.props.game} updateState={this.updateState}/>
                </div>
                <div className = 'gameSettings-item'>
                    <h3>{this.translations.menu.textSetBackground}</h3>
                    <div className = 'gameSettings-colors--buttons'>
                        <ColorsButtons game={this.props.game} updateState={this.updateState}/>
                    </div>
                </div>
                <div className = 'gameSettings-item'>
                    <h3>{this.translations.menu.textSetLanguage}</h3>
                    <div className = 'gameSettings-colors--buttons'>
                        <select name='select' onChange={this.changeLanguage}>
                            <Languages game={this.props.game}/>
                        </select>
                    </div>
                </div>
                <div className = 'gameSettings-item'>
                    <h3>{this.translations.menu.textSetLevel}</h3>
                    <div className = 'gameSettings-colors--buttons'>
                        <select name='select' onChange={this.changeLevel}>
                            <Levels game={this.props.game}/>
                        </select>
                    </div>
                </div>
                <div className = 'gameSettings-item'>
                    <h3>{this.translations.menu.textSetLevel}</h3>
                    <div className = 'gameSettings-sounds'>
                        <Sound className="music" game={this.props.game} updateState={this.updateState}/>
                        <Sound className="sound" game={this.props.game} updateState={this.updateState}/>
                    </div>
                </div>
            </div>
        )
    }
}