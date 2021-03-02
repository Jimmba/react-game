import click from '../../sounds/click.mp3';
import mistake from '../../sounds/mistake.mp3';
import victory from '../../sounds/victory.mp3';

export default class Sounds {
    constructor() {
        this.audio = new Audio();
        this.defaultValue = 0.5;
        this.isPlaying = false;
        this.isMuted = true;
        this.audio.muted = this.isMuted;
        this.src = {
            click: click,
            mistake: mistake,
            victory: victory
        }
    }

    toggleMuting() {
        this.isPlaying = true;
        this.isMuted = !this.isMuted;
        this.audio.muted = this.isMuted;
        console.log(this.isMuted)
    }

    setVolume(value = this.defaultValue) {
        this.audio.volume = value;
        this.defaultValue = value;
    }

    playClick() {
        if (this.isPlaying) {
            this.audio.src = click;
            this.audio.play();
        }
    }

    playMistake() {
        if (this.isPlaying) {
            this.audio.src = mistake;
            this.audio.play();
        }
    }

    playVictory() {
        if (this.isPlaying) {
            this.audio.src = victory;
            this.audio.play();
        }
    }
}