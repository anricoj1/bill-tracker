import Day from './Day';
import Bill from './Bill';

/* Bill Constructors (Title, Date, Cost, Auto Pay) */
class Database {

    getJason() {
         return [ new Bill('Rent', new Day('1').getFullDate(), 440, 0), new Bill('UI', new Day('15').getFullDate(), 75, 0), new Bill('SCG', new Day('15').getFullDate(), 75, 0), new Bill('Verizon', new Day('11').getFullDate(), 90, 0), new Bill('Insurance', new Day('1').getFullDate(), 90, 0), new Bill('Xfinity', new Day('28').getFullDate(), 40, 0) ];
    }

    getAlisha() {
        return [ new Bill('Rent', new Day('1').getFullDate(), 440, 0), new Bill('Car Insurance', new Day('28').getFullDate(), 140, 1), new Bill('Planet Fitness', new Day('16').getFullDate(), 22, 0), new Bill('Groceries', new Day('1').getFullDate(), 220, 0), new Bill('Gas', new Day('1').getFullDate(), 0, 0) ];
    }

    getCombined() {
        return [ new Bill('Rent', new Day('1').getFullDate(), 440, 0), new Bill('UI', new Day('15').getFullDate(), 75, 0), new Bill('SCG', new Day('15').getFullDate(), 75, 0), new Bill('Xfinity', new Day('28').getFullDate(), 40, 0) ];
    }
}

export default Database;