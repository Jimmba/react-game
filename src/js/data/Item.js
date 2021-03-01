
export default class Item {
    constructor(value, index, disabled = false, active = false) {
        this.id = index;
        this.value = value;
        this.disabled = disabled;
        this.active = active;
    }

    change(value) {
        this.value = Number(value);
    }
}