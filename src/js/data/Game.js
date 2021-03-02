import { field, translations } from "./data";
import Item from "./Item";
import Settings from "../data/Settings";
import Music from "./Music";
import Sounds from "./Sounds";

const maxStatisticLength = 10;

const dataToSave = ['data', 'result', 'items', 'settings', 'statistics'];
export default class Game {
    constructor() {
        this.settings = new Settings();
        this.translations = translations[this.settings.lang];
        this.message = '';
        this.data = [];
        this.result = [];
        this.items = [];
        this.music = new Music();
        this.sounds = new Sounds();
        this.statistics = [];
        this.init();
    }

    
    newGame() {
        const games = field[this.settings.level];
        const gameNumber = Math.floor(Math.random() * games.length);
        
        this.data = games[gameNumber].data;
        this.result = games[gameNumber].result;
        this.items = [];
    }

    init() {
        if (!this.loadSavedGame()) this.newGame();
        this.loadItems();
        this.setVolumes();
    }

    loadItems() {
        if (this.items.length) {
            const items = this.items.map(el => el);
            this.items.length = 0;
            items.forEach(el=> {
                this.items.push(new Item(el.value, el.id, el.disabled, el.active));
            });
        } else {
            this.data.forEach((value, index)=> {
                const isDisabled = !!value;
                this.items.push(new Item(value, index, isDisabled));
            });
        }

        this.message = translations[this.settings.lang].messages.default;
    }

    isNotANumber(key) {
        return isNaN(Number(key))
    }

    isGameFinished() {
        for (let i = 0; i < this.result.length; i+= 1) {
            if (this.result[i] !== this.items[i].value) return false;
        }
        return true;
    }

    updateStatistics() {
        const time = this.settings.currentGame.now-this.settings.currentGame.startGame;
        const level = this.settings.level;
        this.statistics.push({time: time, level: level});
        this.statistics.sort((a, b) => {
            if (a.time > b.time) return 1;
            if (a.time == b.time) return 0;
            return -1;
        });
        if (this.statistics.length > maxStatisticLength) this.statistics.length = maxStatisticLength;
        console.log(this.statistics);
    }

    updateMessage(key) {
        const lang = this.settings.lang;
        if (this.isNotANumber(key)) {
            this.message = translations[lang].messages.mistakes.notANumber;
            return;
        }

        if (this.isGameFinished()) {
            this.message = translations[lang].messages.finished;
            this.settings.currentGame.isStarted = false;
            this.updateStatistics();
            this.sounds.playVictory();
            return;
        }
        const index = Math.floor(Math.random() * translations[lang].messages.data.length);
        this.message = translations[lang].messages.data[index];
    }

    selectLanguage(lang) {
        this.settings.lang = lang;
        this.translations = translations[this.settings.lang];
        this.message = translations[this.settings.lang].messages.default;
    }

    selectLevel(level) {
        this.settings.level = level;
        this.newGame();
        this.loadItems();
    }

    loadSavedGame() {
        let gameIsLoad = false;
        dataToSave.forEach(el => {
            if (localStorage.getItem(el)) {
                this.[el] = JSON.parse(localStorage.getItem(el));
                gameIsLoad = true;
            }
        })
        this.settings.isHidden = true;

        this.translations = translations[this.settings.lang];
        return gameIsLoad;
    }

    saveGame() {
        dataToSave.forEach(el => {
            localStorage.setItem(el, JSON.stringify(this.[el]));
        })
    }

    resetGame() {
        this.items.length = 0;
        this.settings.currentGame.isStarted = false;
        this.settings.currentGame.isReset = true;
        this.loadItems();
    }
    
    setMusicVolume(value) {
        this.settings.music.volume = value;
        this.music.audio.volume = value;
    }

    setSoundsVolume(value) {
        this.settings.sounds.volume = value;
        this.sounds.audio.volume = value;
    }

    setVolumes(){
        this.music.audio.volume = this.settings.music.volume;
        this.sounds.audio.volume = this.settings.sounds.volume;
    }

    startGame() {
        this.settings.currentGame.isStarted = true;
        this.settings.currentGame.isReset = false;
        this.settings.currentGame.startGame = Date.now();
    }
}