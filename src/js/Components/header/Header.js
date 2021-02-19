import React from 'react';
import { Button } from './Button';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Sudoku</h1>
                <Button className = 'settings' text = 'Settings' functionName='showSettings'/>
            </header>
        )
    }
}