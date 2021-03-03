import React from 'react';
import { StatItem } from './StatItem';

export class StatList extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
    }

    render() {
        const stat = this.game.statistics;
        return stat.map((element, index) => {
            return <StatItem index={index} element={element} key={index}/>
        });
    }
}