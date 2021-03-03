import React from 'react';
import { translations } from '../../data/data';

export class Languages extends React.Component {
    constructor(props) {
        super(props);
        this.languages = Object.keys(translations);
    }

    render() {
        return this.languages.map((el, index) => {
            return <option value = {el} key = {index}>{el}</option>
        })  
    }
}