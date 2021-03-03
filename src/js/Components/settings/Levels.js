import React from 'react';
import { translations } from '../../data/data';

export class Levels extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.lang = this.props.game.settings.lang;
        this.levels = translations[this.lang].menu.levels;
        return this.levels.map((el, index) => {
            return <option value = {el.value} key = {index} >{el.level}</option>
        })  
    }
}