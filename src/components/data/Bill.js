class Bill {
    constructor(title, date, cost, auto) {
        this.title = title;
        this.date = date;
        this.cost = cost;
        this.auto = auto;
    }

    getTitle() {
        return this.title;
    }

    getDate() {
        return this.date;
    }

    getCost() {
        return this.cost;
    }

    getType() {
        return this.auto;
    }

    getAll() {
        return [this.title, this.date, this.cost, this.auto];
    }
}

export default Bill;