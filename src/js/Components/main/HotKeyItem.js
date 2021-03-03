import React from 'react'

export class HotKeyItem extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
    }

    render() {
        return (
            <div className='hotKeyItem'>
                <div className='key'>{this.props.el.button}</div><div className='description'>{this.props.el.description}</div>
            </div>
        )
            
    }
}