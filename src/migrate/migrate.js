const Banck = require('../datasouce/bank');
//const sql = ('../migrate/migrate.sql');

const bank = new Banck();
const migrate = require('./migrate.sql');
const main = async () => {
   bank.isConnected();
    bank.read('alter table message add time time default \'10:00:50\';');
};

main();



