import React from 'react';
import { Button } from '../header/Button';
import { ColorsButtons } from './ColorsButtons';

export class Settings extends React.Component {
    render() {
        return (
            <div className = 'gameSettings'>
                <div className = 'gameSettings-item'>
                    <Button className='close' text = 'Close' functionName='hideSettings' />
                </div>
                <div className = 'gameSettings-item'>
                    <h3>Set background color</h3>
                    <div className = 'gameSettings-colors--buttons'>
                        <ColorsButtons />
                    </div>
                </div>
            </div>
        )
    }
}