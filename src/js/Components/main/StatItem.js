import React from 'react';
import { formatTime } from '../../data/data';

export class StatItem extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
    }

    render() {
        return (
            <div className='statItem'>
                <div className='statItem-index'>{this.props.index + 1}</div>
                <div className='statItem-time'>{formatTime(this.props.element.time)}</div>
                <div className='statItem-level'>{this.props.element.level}</div>
            </div>
        )
    }
}