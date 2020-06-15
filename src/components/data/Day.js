class Day {
    constructor(day) {
        this.month = new Date().getMonth() + 1;
        this.day = day;
        this.year = new Date().getUTCFullYear();
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    getDay() {
        return this.day;
    }

    getFullDate() {
        return this.month.toString() + '/' + this.day + '/' + this.year.toString();
    }
}

export default Day;