class Database {
    constructor(table) {
        this.table = table;
    }

    tables() {
        const d = new Date();
        const cmonth = d.getMonth() + 1;
        const cyear = d.getUTCFullYear();

        /* [rent, ui, scg, verizon, car insurance, credit, groceries, gas] */
        if (this.table === 'Jason') {
            const db_ja = [
                {
                    "cost" : 440,
                    "auto_pay" : 0,
                    "date" : cmonth + '/1/' + cyear
                },
                {
                    "cost" : 0,
                    "auto_pay" : 0,
                    "date" : cmonth + '/30/' + cyear
                },
                {
                    "cost" : 0,
                    "auto_pay" : 0,
                    "date" : cmonth + '/30/' + cyear
                },
                {
                    "cost" : 60,
                    "auto_pay" : 1,
                    "date" : cmonth + '/16/' + cyear
                },
                {
                    "cost" : 90,
                    "auto_pay" : 0,
                    "date" : cmonth + '/1/' + cyear
                },
                {
                    "cost" : 0,
                    "auto_pay" : 0,
                    "date" : cmonth + '/19/' + cyear
                },
                {
                    "cost" : 0,
                    "auto_pay" : 0,
                    "date" : cmonth + '/1/' + cyear
                },
                {
                    "cost" : 0,
                    "auto_pay" : 0,
                    "date" : cmonth + '/30/' + cyear
                }
            ];
            
            return db_ja;

        } else if (this.table === 'Alisha') {
            /* [rent, ui, scg, car insurance, pf, groceries, gas] */
            const ab_db = [
                {
                    "cost" : 440,
                    "auto_pay" : 0,
                    "date" : cmonth + '/1/' + cyear
                },
                {
                    "cost" : 0,
                    "auto_pay" : 0,
                    "date" : cmonth + '/30/' + cyear 
                },
                {
                    "cost" : 0,
                    "auto_pay" : 0,
                    "date" : cmonth + '/30/' + cyear
                },
                {
                    "cost" : 140,
                    "auto_pay" : 0,
                    "date" : cmonth + '/28/' + cyear
                },
                {
                    "cost" : 22,
                    "auto_pay" : 1,
                    "date" : cmonth + '/16/' + cyear
                },
                {
                    "cost" : 0,
                    "auto_pay" : 0,
                    "date" : cmonth + '/1/' + cyear
                },
                {
                    "cost" : 0,
                    "auto_pay" : 0,
                    "date" : cmonth + '/1/' + cyear
                }
            ];

            return ab_db;

        } else if (this.table === 'Shared Bills') {
            const util = [
                {
                    "cost" : 440,
                    "auto_pay" : 0,
                    "date" : cmonth + '/1/' + cyear
                },
                {
                    "cost" : 0,
                    "auto_pay" : 0,
                    "date" : cmonth + '/30/' + cyear 
                },
                {
                    "cost" : 0,
                    "auto_pay" : 0,
                    "date" : cmonth + '/30/' + cyear
                },
            ]

            return util;

        } else {
            return 'There was an error';
        } 
    }
}

export default Database;