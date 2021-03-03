import React from 'react';
import { translations } from '../../data/data';
import { Button } from '../header/Button';
import { StatList } from './StatList';

export class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
        this.updateState = this.props.updateState.bind(this);
    }

    render() {
        
        const className = this.props.game.isHiddenStatistics ? 'menu gameStatistics' : 'menu gameStatistics show';
        this.translations = this.game.translations;
        return (
            <div className = {className}>
                <div className = 'menu-item'>
                    <Button className='close' text = {this.translations.menu.closeButton} functionName='hideStatistics' game={this.game} updateState={this.updateState}/>
                </div>
                <div className = 'menu-item'>
                    <h3>{this.translations.menu.statistics.title}</h3>
                    <StatList game={this.game}/>
                </div>
            </div>
        )
    }
}