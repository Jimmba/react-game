
import game from '../../sounds/game.mp3'

export default class Music {
    constructor() {
        this.audio = new Audio();
        this.audio.src = game;
        this.defaultValue = 0.5;
        this.isPlaying = false;
        this.isMuted = false;
        this.audio.loop = true;
    }

    togglePlaying() {
        if (this.isPlaying) {
            this.audio.muted = this.isMuted ? false : true;
            this.isMuted = !this.isMuted;
        } else {
            this.audio.play();
            this.isPlaying = true;
        }
    }
}