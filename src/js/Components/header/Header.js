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
                <h1>Sudoku</h1>
                <Button className = 'settings' text = 'Settings' functionName='showSettings' game = {this.game} updateState={this.updateState}/>
            </header>
        )
    }
}