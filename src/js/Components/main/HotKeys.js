import React from 'react'
import {translations } from '../../data/data';
import { HotKeyItem } from './HotKeyItem';

export class HotKeys extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
    }

    render() {
        const keys = translations[this.game.settings.lang].hotKeys.values;
        return keys.map((el, index) => {
            return <HotKeyItem el={el} key={index}/>
        })
    }
}