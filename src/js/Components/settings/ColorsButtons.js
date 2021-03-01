import React from 'react';
import { Button } from '../header/Button';

export class ColorsButtons extends React.Component {
    constructor(props) {
        super(props);
        this.updateState = this.props.updateState.bind(this);
    }
    render() {
        this.buttons = this.props.game.translations.menu.themesButtons;
        return this.buttons.map((el, index) => {
            return <Button className={el.className} key={index} text={el.description} functionName='changeTheme' game={this.props.game} updateState={this.updateState}/>
        }); 
    }
}