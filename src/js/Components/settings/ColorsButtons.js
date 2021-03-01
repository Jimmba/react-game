import React from 'react';
import { themes } from '../../data/data';
import { Button } from '../header/Button';

export class ColorsButtons extends React.Component {
    constructor(props) {
        super(props);
        this.updateState = this.props.updateState.bind(this);
    }
    render() {
        return themes.map((el, index) => {
            return <Button className={el} key={index} text={el} functionName='changeTheme' game={this.props.game} updateState={this.updateState}/>
        }); 
    }
}