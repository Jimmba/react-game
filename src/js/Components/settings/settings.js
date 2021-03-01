import React from 'react';
import { Button } from '../header/Button';
import { ColorsButtons } from './ColorsButtons';

export class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.settings = this.props.game.settings;
        this.state = {
            settings: this.settings
        }

        this.updateState = this.props.updateState.bind(this);
    }

    render() {
        const className = this.props.game.settings.isHidden ? 'gameSettings' : 'gameSettings show';
        return (
            <div className = {className}>
                <div className = 'gameSettings-item'>
                    <Button className='close' text = 'Close' functionName='hideSettings' game={this.props.game} updateState={this.updateState}/>
                </div>
                <div className = 'gameSettings-item'>
                    <h3>Set background color</h3>
                    <div className = 'gameSettings-colors--buttons'>
                        <ColorsButtons game={this.props.game} updateState={this.updateState}/>
                    </div>
                </div>
            </div>
        )
    }
}