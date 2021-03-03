import CurrentGame from "./CurrentGame";
import { translations, themes } from "./data"
export default class Settings {
    constructor (){
        this.themes = themes;
        this.activeTheme = this.themes[0];
        this.isHidden = true;
        this.lang = Object.keys(translations)[0];
        this.level = translations[this.lang].menu.levels[0].value;
        this.music = {
            volume: 0.5,
        }
        
        this.sounds = {
            volume: 0.5,
        }

        this.currentGame = new CurrentGame();
    }
}