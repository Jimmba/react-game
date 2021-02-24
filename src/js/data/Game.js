import { field, messages } from "./data";
import Item from "./Item";


export default class Game {
    constructor() {
        
    this.data = field.data;
    this.result = field.result;
    this.items = [];
    this.message = '';
    this.init();
    }

    init() {
        field.data.forEach((value, index)=> {
            this.items.push(new Item(value, index));
        });
        this.message = messages.default;
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
        if (this.isNotANumber(key)) {
            this.message = messages.mistakes.notANumber;
            return;
        }

        if (this.isGameFinished()) {
            this.message = messages.finished;
            return;
        }
        const index = Math.floor(Math.random() * messages.data.length);
        this.message = messages.data[index];
    }




}