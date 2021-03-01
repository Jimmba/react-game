import { themes } from "./data"

export default class Settings {
    constructor (){
        this.themes = themes;
        this.activeTheme = this.themes[0];
        this.isHidden = true;
    }
}