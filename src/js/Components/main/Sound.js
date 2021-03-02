import React from 'react';
import soundOn from '../../../images/soundOn.png'
import soundOff from '../../../images/soundOff.png'

const volumeDelimiter = 100;

export class Sound extends React.Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
        this.changeVolume = this.changeVolume.bind(this);
        this.updateState = this.props.updateState.bind(this);
    }
   
    changeVolume(e) {
        const {name, value} = e.target;
        if (name === 'music') {
            this.game.setMusicVolume(value / volumeDelimiter)
        } else {
            this.game.setSoundsVolume(value / volumeDelimiter)
        }
        this.updateState(this.game);
    }


    playToggle(name) {
        //debugger;
        if (name === 'music') {
            this.game.music.togglePlaying();
        } else {
            this.game.sounds.toggleMuting();
        }
        this.updateState(this.game);
    }

    render() {
        // debugger;
        const className = [this.props.className];
        const typeAudio = className == 'music' ? 'music' : 'sounds';
        let isMusicOn = false;
        if (this.props.game[typeAudio].isPlaying === true && this.props.game[typeAudio].isMuted === false) {
            isMusicOn = true;
        }

        const icon = isMusicOn ? soundOn : soundOff;
        const defaultValue = this.props.game.settings[typeAudio].volume * volumeDelimiter;

        return (
            <div className = "audio">
                <label htmlFor={className}>{className}</label>
                <img className = "sounds" src = {icon} onClick={(e) => {this.playToggle(typeAudio)}}></img>
                <input 
                    type = "range" 
                    id = {className} 
                    name = {className} 
                    min='0' 
                    max = '100' 
                    step = '1' 
                    value = {defaultValue}
                    onChange = {this.changeVolume}
                ></input>
                
            </div>
        )
    }
}