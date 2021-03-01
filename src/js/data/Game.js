import { field, translations } from "./data";
import Item from "./Item";
import Settings from "../data/Settings";

const dataToSave = ['data', 'result', 'items', 'settings'];
export default class Game {
    constructor() {
        this.settings = new Settings();
        this.translations = translations[this.settings.lang];
        this.message = '';
        this.data = [];
        this.result = [];
        this.items = [];
        this.init();
    }

    newGame() {
        const games = field[this.settings.level];
        const gameNumber = Math.floor(Math.random() * games.length);
        
        this.data = games[gameNumber].data;
        this.result = games[gameNumber].result;
        // this.data = field[this.settings.level][0].data;
        // this.result = field[this.settings.level][0].result;
        this.items = [];
    }

    init() {
        if (!this.loadSavedGame()) this.newGame();
        this.loadItems();
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

    updateMessage(key) {
        const lang = this.settings.lang;
        if (this.isNotANumber(key)) {
            this.message = translations[lang].messages.mistakes.notANumber;
            return;
        }

        if (this.isGameFinished()) {
            this.message = translations[lang].messages.finished;
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
        this.loadItems();
    }

}