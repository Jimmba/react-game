
export default class Item {
    constructor(value, index) {
        this.id = index;
        this.value = value;
        this.active = false;
        this.disabled = this.value ? true : false;
    }

    change(value) {
        this.value = Number(value);
    }
}