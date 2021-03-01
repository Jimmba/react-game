import React from 'react';
import { Item } from './Item';

export class Field extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
        this.changeMessage=this.props.updateMessage.bind(this);
    }

    changeMessage() {
        this.updateMessage();
    }

    render() {
        return (
            this.game.items.map((el, index) => {
                return <Item item={el} key={index} changeMessage={this.changeMessage} game={this.game}/>
            })
        )
    }
}